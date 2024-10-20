import ProCard from '@/components/ProCard';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaShippingFast } from 'react-icons/fa';

type FormData = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  zipCode: string;
};

const CartPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [subtotal, setSubtotal] = useState(100); // Example values
  const [shipping, setShipping] = useState(10);
  const taxRate = 0.08;

  const tax = subtotal * taxRate;
  const total = subtotal + shipping + tax;

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="flex container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  {...register("firstName", { required: true })}
                  className="input input-bordered"
                />
                {errors.firstName && <span className="text-error">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  {...register("lastName", { required: true })}
                  className="input input-bordered"
                />
                {errors.lastName && <span className="text-error">This field is required</span>}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                {...register("address", { required: true })}
                className="input input-bordered"
              />
              {errors.address && <span className="text-error">This field is required</span>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">City</span>
                </label>
                <input
                  type="text"
                  {...register("city", { required: true })}
                  className="input input-bordered"
                />
                {errors.city && <span className="text-error">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Zip Code</span>
                </label>
                <input
                  type="text"
                  {...register("zipCode", { required: true, pattern: /^\d{5}$/ })}
                  className="input input-bordered"
                />
                {errors.zipCode && <span className="text-error">Please enter a valid zip code</span>}
              </div>
            </div>

          </form>
          <div className="grid grid-cols-2 place-items-center p-12 items-center justify-center">
            <ProCard title="All Members"
            description={["Choose from our original prices","Subscribe for 6 months and build up to 30% off shipping"]}
            imageSrc={<FaShippingFast size={100}/>}/>
            <ProCard title="Latitude Pro Members" badgeText="Free Shipping"
            description={["Spend $50+ and unlock free shipping","Exclusive: 10% off sitewide"]}
            imageSrc={<FaShippingFast size={100}/>}/>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Order Summary</h2>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="divider"></div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary" onClick={handleSubmit(onSubmit)}>Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default CartPage;