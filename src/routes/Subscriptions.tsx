// one-shotted with v0

import { useState } from 'react'
import { format, addDays } from 'date-fns'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Frequency = 'Weekly' | 'Biweekly' | 'Monthly'
type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday'

interface Order {
  id: string
  product: string
  frequency: Frequency
  estimatedArrival: Date
  image: string
  day: Day
}

const daysOfWeek: Day[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

const initialOrders: Order[] = [
  { id: '1', product: '11" x 8" 44 oz-4-compartment rectangular black vented lid', frequency: 'Weekly', estimatedArrival: addDays(new Date(), 7), image: '/placeholder.svg?height=200&width=200', day: 'Monday' },
  { id: '2', product: 'Bento Box', frequency: 'Weekly', estimatedArrival: addDays(new Date(), 9), image: '/placeholder.svg?height=200&width=200', day: 'Tuesday' },
]

export default function SubscriptionPage() {
  const [activeTab, setActiveTab] = useState<Day>('Monday')
  const [orders, setOrders] = useState<Order[]>(initialOrders)

  const handleDayChange = (orderId: string, newDay: Day) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId ? { ...order, day: newDay } : order
      )
    )
  }

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-3xl font-bold my-4">Subscribed Orders</h1>
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as Day)}>
        <TabsList className="grid w-full grid-cols-5">
          {daysOfWeek.map((day) => (
            <TabsTrigger key={day} value={day}>{day}</TabsTrigger>
          ))}
        </TabsList>
        {daysOfWeek.map((day) => (
          <TabsContent key={day} value={day}>
            <div className="space-y-4">
              {orders.filter(order => order.day === day).map((order) => (
                <Card key={order.id} className="w-full">
                  <div className="flex">
                    <div className="w-1/4 p-4">
                      <img src={order.image} alt={order.product} className="w-full h-auto object-cover rounded-lg" />
                    </div>
                    <div className="w-3/4">
                      <CardHeader>
                        <CardTitle>{order.product}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center mb-2">
                          <Badge variant="secondary">{order.frequency}</Badge>
                          <span>{"Next delivery: "+format(order.estimatedArrival, 'MMM dd, yyyy')}</span>
                        </div>
                        <Select
                          value={order.day}
                          onValueChange={(value) => handleDayChange(order.id, value as Day)}
                        >
                          <SelectTrigger className="w-full mt-2">
                            <SelectValue placeholder="Change delivery day" />
                          </SelectTrigger>
                          <SelectContent>
                            {daysOfWeek.map((day) => (
                              <SelectItem key={day} value={day}>
                                {day}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
              {orders.filter(order => order.day === day).length === 0 && (
                <Card className="w-full">
                  <CardContent className="pt-6">
                    <p className="text-center text-muted-foreground">No orders scheduled for this day.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}