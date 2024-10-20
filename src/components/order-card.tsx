import { Card, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


export default function OrderCard({ 
   id, 
   status, 
   orderDate, 
   estimatedDeliveryDate, 
   orderType, 
   quantity, 
   totalCost 
}: { 
   id: number; 
   status: string; 
   orderDate: string; 
   estimatedDeliveryDate: string; 
   orderType: string; 
   quantity: number; 
   totalCost: number; 
}) {

  return (
    <Card className="overflow-hidden grid grid-cols-1 md:grid-cols-[300px_1fr] max-w-3xl">
      <div className="flex flex-col items-start justify-center gap-2 bg-muted/50 p-4">
        <div className="grid gap-1">
          <CardTitle className="text-lg">Order #{id}</CardTitle>
          <Badge
            variant="default"
            className="uppercase text-white">
            {status}
          </Badge>
        </div>
        <img
          src="/placeholder.svg"
          width={200}
          height={200}
          alt="Order"
          className="rounded-md"
          style={{ aspectRatio: "200/200", objectFit: "cover" }}
        />
      </div>
      <CardContent className="p-4 text-sm grid gap-2">
        <div className="flex items-center justify-between">
          <span>Ordered: {orderDate}</span>
        </div>
        <div className="grid gap-1">
          <span>Estimated Delivery: <b>{estimatedDeliveryDate}</b></span>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Order Type</span>
            <span>{orderType}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Quantity</span>
            <span>{quantity}</span>
          </div>
          <div className="flex items-center justify-between font-semibold">
            <span className="text-muted-foreground">Total Cost</span>
            <span>${totalCost.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}