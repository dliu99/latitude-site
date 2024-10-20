import OrderCard from "@/components/order-card";
/*
orderDate: string, 
   estimatedDeliveryDate: string, 
   orderType: string, 
   quantity: number, 
   totalCost: number
*/
export default function Orders() {
    return (
        <div className="min-h-screen mx-12 my-4">
            <h1 className="text-3xl text-center p-6 py-14 font-bold">My Orders</h1>
            <div className="grid grid-cols-2 place-items-center">
                <OrderCard id={123} status="Out for Delivery" estimatedDeliveryDate="9/29/2024" orderType="subscription" orderDate="9/28/2024" quantity={2} totalCost={12.99}/>
                <OrderCard id={123} status="Confirmed" estimatedDeliveryDate="9/29/2024" orderType="subscription" orderDate="9/28/2024" quantity={2} totalCost={14.99}/>
            </div>
        </div>
    )
}