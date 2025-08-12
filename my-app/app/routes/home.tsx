import { Button } from "~/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { ThemeToggle } from "~/components/theme-toggle"

import type { Route } from "./+types/home"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login - React Router App" },
    { name: "description", content: "Login to your account" },
  ]
}

export function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Enter your leetcode account</CardTitle>
        <CardDescription>
          Enter your leetcode below to start tracking with your friends
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Leetcode nickname</Label>
              <Input
                id="email"
                type="email"
                placeholder="alibeknon"
                required
              />
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          track
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-4">
      
      <ThemeToggle />
      <CardDemo />
      
    </div>
  )
}