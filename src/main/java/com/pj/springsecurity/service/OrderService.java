package com.pj.springsecurity.service;

import com.pj.springsecurity.model.cart.Cart;
import com.pj.springsecurity.model.cart.CartProduct;
import com.pj.springsecurity.model.order.Order;
import com.pj.springsecurity.model.order.OrderBillingAddress;
import com.pj.springsecurity.model.order.OrderProductDetail;
import com.pj.springsecurity.model.order.OrderShippingAddress;
import com.pj.springsecurity.model.tax.TaxRate;
import com.pj.springsecurity.repo.*;
import com.pj.springsecurity.util.UserInfoUtil;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService
{
    private final OrderRepository orderRepository;

    private final OrderStatusRepository orderStatusRepository;

    private final OrderProductDetailRepository orderProductDetailRepository;

    private final UserInfoUtil userInfoUtil;

    private final CartRepository cartRepository;

    private final TaxRateRepository taxRateRepository;

    private final ModelMapper modelMapper;


    public OrderService(OrderRepository orderRepository, OrderStatusRepository orderStatusRepository, OrderProductDetailRepository orderProductDetailRepository, UserInfoUtil userInfoUtil, CartRepository cartRepository, TaxRateRepository taxRateRepository, ModelMapper modelMapper)
    {
        this.orderRepository = orderRepository;
        this.orderStatusRepository = orderStatusRepository;
        this.orderProductDetailRepository = orderProductDetailRepository;
        this.userInfoUtil = userInfoUtil;
        this.cartRepository = cartRepository;
        this.taxRateRepository = taxRateRepository;
        this.modelMapper = modelMapper;
    }


    public Order createOrder()
    {
        Cart cart=getMyCart();
        if(cart!=null)
        {
            Order order=new Order();
            order.setPurchasedBy(userInfoUtil.getCurrentUserProfile());
            Double totalCostBeforeTax=calculateTotalCostBeforeTax(cart);
            Double taxAmount=totalCostBeforeTax*getTaxRate(cart);
            order.setTax(taxAmount);
            order.setTotalCost(totalCostBeforeTax+taxAmount);
            order.setOrderStatus(orderStatusRepository.findByStatus("Created"));
            order.setShippingCharge((double) 0);
            order.setOrderCreatedDateTime(LocalDateTime.now());

            OrderShippingAddress orderShippingAddress=modelMapper.map(cart.getCartShippingAddress(),OrderShippingAddress.class);
            orderShippingAddress.setId(null);
            orderShippingAddress.setOrder(order);

            OrderBillingAddress orderBillingAddress=modelMapper.map(cart.getCartBillingAddress(),OrderBillingAddress.class);
            orderBillingAddress.setId(null);
            orderBillingAddress.setOrder(order);

            order.setOrderShippingAddress(orderShippingAddress);
            order.setOrderBillingAddress(orderBillingAddress);

            order.setOrderProductDetails(copyCartProducts(cart));
            order=orderRepository.saveAndFlush(order);
            cartRepository.delete(cart);

            return order;
        }
        return null;
    }

    private Double getTaxRate(Cart cart)
    {
        return taxRateRepository.findByStateId(cart.getCartShippingAddress()
                .getState().getId()).map(TaxRate::getRate).orElse(null);
    }

    public List<Order> getOrder()
    {
        return orderRepository.findAll();
    }

    public Optional<Order> getOrderById(Long id)
    {
        return orderRepository.findById(id);
    }

    public Order updateOrder(Order order)
    {
        return orderRepository.saveAndFlush(order);
    }

    /*
        Copy cart products to Order
    */
    private List<OrderProductDetail> copyCartProducts(Cart cart)
    {
        List<OrderProductDetail> orderProductDetailList=new ArrayList<>();
        List<CartProduct> cartProductList=cart.getCartProducts();
        for(CartProduct cartProduct: cartProductList)
        {
            OrderProductDetail orderProductDetail=new OrderProductDetail();
            orderProductDetail.setProduct(cartProduct.getProduct());
            orderProductDetail.setQuantity(cartProduct.getQuantity());
            orderProductDetail.setOriginalPrice(cartProduct.getProduct().getPrice().getAmount());
            orderProductDetail=orderProductDetailRepository.saveAndFlush(orderProductDetail);
            orderProductDetailList.add(orderProductDetail);
        }
        return orderProductDetailList;
    }

    private Double calculateTotalCostBeforeTax(Cart cart)
    {
        List<CartProduct> cartProductList=cart.getCartProducts();
        double totalCostBeforeTax=0.00;
        for (CartProduct cartProduct: cartProductList)
        {
            totalCostBeforeTax+=cartProduct.getQuantity()*cartProduct.getProduct().getPrice().getAmount();
        }
        return totalCostBeforeTax;
    }

    private Cart getMyCart()
    {
        return cartRepository.findAllByUserProfileUserId(userInfoUtil.getCurrentUserProfile().getUser().getId()).orElse(null);
    }
}
