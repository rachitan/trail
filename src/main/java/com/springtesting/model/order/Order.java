package com.springtesting.model.order;

import com.springtesting.model.AbstractAuditingEntity;
import com.springtesting.model.user.Address;
import com.springtesting.model.user.UserProfile;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@Table(name = "order")
public class Order extends AbstractAuditingEntity implements Serializable
{
    private static final long serialVersionUID = -6699422774799518237L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "tax")
    private Double tax;

    @Column(name = "shipping_charge")
    private Double shippingCharge;

    @Column(name = "total_cost")
    private Double totalCost;

    @ManyToOne
    @JoinColumn(name = "order_status")
    private OrderStatus orderStatus;

    @ManyToOne
    @JoinColumn(name = "purchased_By")
    private UserProfile purchasedBy;

    @ManyToOne
    @JoinColumn(name = "shipping_address")
    private Address shippingAddress;

    @Column(name = "order_created_date_time")
    private LocalDateTime orderCreatedDateTime;


    @OneToMany
    @JoinTable(
            name = "order_product",
            joinColumns = @JoinColumn(name = "order_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "order_product_detail_id", referencedColumnName = "id"))
    private List<OrderProductDetail> orderProductDetails = new ArrayList<>();

    @Override
    public String toString()
    {
        return "Order{" +
                "id=" + id +
                ", tax=" + tax +
                ", shippingCharge=" + shippingCharge +
                ", totalCost=" + totalCost +
                '}';
    }
}