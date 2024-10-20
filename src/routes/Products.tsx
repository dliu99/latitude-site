import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import ShopCard from "@/components/ShopCard"

export default function Products() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-12 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 px-4 md:px-6">
        <div className="flex flex-col gap-4">

          <Accordion type="single" collapsible>{/** filters */}
            <AccordionItem value="material">
              <AccordionTrigger className="text-base font-semibold">Material</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="material-plastic" /> Plastic
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="material-paper" /> Paper
                  </Label>
                  <Label className="flex items-center gap-2 font-normal text-green-500">
                    <Checkbox id="material-eco" /> Eco
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="containers">
              <AccordionTrigger className="text-base font-semibold">Containers</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="containers-food" /> Food
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="containers-beverage" /> Beverage
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="containers-storage" /> Storage
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="bags">
              <AccordionTrigger className="text-base font-semibold">Bags</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="bags-shopping" /> Shopping
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="bags-disposal" /> Disposal
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="bags-specialty" /> Specialty
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="Miscellaneous">
              <AccordionTrigger className="text-base font-semibold">Miscellaneous</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="misc-cups" /> Cups
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="misc-napkins" /> Napkins
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="misc-tableware" /> Tableware
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <ShopCard title="Product 1" description="Description" price={123.95} image="/placeholder.svg"/>
            <ShopCard title="Product 2" description="Description" price={123.95} image="/placeholder.svg"/>
            <ShopCard title="Product 3" description="Description" price={123.95} image="/placeholder.svg"/>
            <ShopCard title="Product 4" description="Description" price={123.95} image="/placeholder.svg"/>
            <ShopCard title="Product 5" description="Description" price={123.95} image="/placeholder.svg"/>
            <ShopCard title="Product 6" description="Description" price={123.95} image="/placeholder.svg"/>
        </div>
      </main>
    </div>
  )
}