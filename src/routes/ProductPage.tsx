import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ProductPage() {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6 pt-24">
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          <img
            src="/placeholder.svg"
            alt="Bento Box"
            width={600}
            height={600}
            className="aspect-square object-cover border w-full rounded-lg overflow-hidden"
          />
          <div className="hidden md:flex gap-4 items-start">
            <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
              <img
                src="/placeholder.svg"
                alt="Preview thumbnail"
                width={100}
                height={100}
                className="aspect-square object-cover"
              />
              <span className="sr-only">View Image 1</span>
            </button>
            <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
              <img
                src="/placeholder.svg"
                alt="Preview thumbnail"
                width={100}
                height={100}
                className="aspect-square object-cover"
              />
              <span className="sr-only">View Image 2</span>
            </button>
            <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
              <img
                src="/placeholder.svg"
                alt="Preview thumbnail"
                width={100}
                height={100}
                className="aspect-square object-cover"
              />
              <span className="sr-only">View Image 3</span>
            </button>
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          <h1 className="font-bold text-3xl">Plastic Bento Box</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-0.5">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            </div>
            <span className="text-muted-foreground">5.0 (123 reviews)</span>
          </div>
          <p className="text-2xl font-bold">$9.99</p>
        </div>
        <form className="grid gap-4 md:gap-6">
          <div className="grid">
            <Label htmlFor="color" className="text-base">
              Color
            </Label>
            <RadioGroup id="color" defaultValue="black" className="flex items-center gap-2">
              <Label
                htmlFor="color-black"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2"
              >
                <RadioGroupItem id="color-black" value="black" />
                Black
              </Label>
              <Label
                htmlFor="color-white"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="color-white" value="white" />
                White
              </Label>
              <Label
                htmlFor="color-blue"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="color-blue" value="blue" />
                Blue
              </Label>
            </RadioGroup>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="size" className="text-base">
              Size
            </Label>
            <RadioGroup id="size" defaultValue="m" className="flex items-center gap-2">
              <Label
                htmlFor="size-s"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="size-s" value="s" />
                Small
              </Label>
              <Label
                htmlFor="size-m"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="size-m" value="m" />
                Medium
              </Label>
              <Label
                htmlFor="size-l"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="size-l" value="l" />
                Large
              </Label>
            </RadioGroup>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subscription" className="text-base">
              Subscription
            </Label>
            <RadioGroup id="subscription" defaultValue="subscribe" className="flex items-center gap-2">
              <Label
                htmlFor="subscribe"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="subscribe" value="subscribe" />
                Subscribe and Save 30%
              </Label>
              <Label
                htmlFor="one-time"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="one-time" value="one-time" />
                One-time Purchase
              </Label>
            </RadioGroup>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="frequency" className="text-base">
              Delivery Frequency
            </Label>
            <Select defaultValue="monthly" className="w-full">
              <SelectTrigger>
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent className="bg-white" >
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button size="lg" className="text-white">Add to Cart</Button>
        </form>
      </div>
      <div className="col-span-2 grid gap-6">
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="flex flex-col items-center gap-4 p-6 text-center">
            <LayersIcon className="w-8 h-8 fill-primary" />
            <h3 className="font-bold text-lg">Durable Design</h3>
            <p className="text-muted-foreground">
              Our bento boxes are made from high-quality plastic that is built to last.
            </p>
          </Card>
          <Card className="flex flex-col items-center gap-4 p-6 text-center">
            <BoxIcon className="w-8 h-8 fill-primary" />
            <h3 className="font-bold text-lg">Leak-Proof</h3>
            <p className="text-muted-foreground">Enjoy your meals without worrying about spills or leaks.</p>
          </Card>
          <Card className="flex flex-col items-center gap-4 p-6 text-center">
            <MicrowaveIcon className="w-8 h-8 fill-primary" />
            <h3 className="font-bold text-lg">Microwave Safe</h3>
            <p className="text-muted-foreground">Heat up your food quickly and easily in the microwave.</p>
          </Card>
        </div>
        <div className="grid gap-4 text-sm leading-loose">
          <h2 className="font-bold text-2xl">Product Description</h2>
          <p>
            Introducing our high-quality plastic bento box, the perfect solution for your on-the-go meals. Crafted with
            durable and leak-proof materials, this bento box is designed to keep your food fresh and secure during your
            busy day.
          </p>
          <p>
            With its convenient compartments, you can easily separate your main dish, sides, and snacks, ensuring a
            balanced and satisfying meal every time. The microwave-safe design allows you to heat up your food quickly
            and easily, making it a versatile choice for work, school, or travel.
          </p>
          <p>
            Whether you're packing a healthy lunch or a delicious dinner, our bento box is the perfect companion to keep
            your meals organized and protected. Invest in a sustainable and practical solution for your on-the-go
            lifestyle with our plastic bento box.
          </p>
        </div>
      </div>
    </div>
  )
}

function BoxIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function LayersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  )
}


function MicrowaveIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="15" x="2" y="4" rx="2" />
      <rect width="8" height="7" x="6" y="8" rx="1" />
      <path d="M18 8v7" />
      <path d="M6 19v2" />
      <path d="M18 19v2" />
    </svg>
  )
}


function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
