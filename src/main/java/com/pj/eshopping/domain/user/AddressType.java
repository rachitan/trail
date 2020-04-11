package com.pj.eshopping.domain.user;

import com.pj.eshopping.audit.AbstractAuditingEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@Table(name = "address_type")
public class AddressType extends AbstractAuditingEntity  implements Serializable
{
	private static final long serialVersionUID = 4381043207138882281L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "type", nullable = false)
	private String type;

	public AddressType()
	{

	}

	public AddressType(String type)
	{
		this.type = type;
	}
}
