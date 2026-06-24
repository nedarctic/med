"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  Stethoscope,
  ReceiptText,
  BarChart3,
  CommandIcon 
} from "lucide-react"

const data = {
  user: {
    name: "John Rop",
    email: "john.rop@kilelclinics.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: (
        <LayoutDashboard
        />
      ),
    },
    {
      title: "Patients",
      url: "/patients",
      icon: (
        <Users
        />
      ),
    },
    {
      title: "Appointments",
      url: "/appointments",
      icon: (
        <CalendarDays
        />
      ),
    },
    {
      title: "Consultations",
      url: "/consultation",
      icon: (
        <Stethoscope
        />
      ),
    },
    {
      title: "Billing",
      url: "/billing",
      icon: (
        <ReceiptText
        />
      ),
    },
    {
      title: "Reports",
      url: "/reports",
      icon: (
        <BarChart3
        />
      ),
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <a href="#">
                <CommandIcon className="size-5!" />
                <span className="text-base font-semibold">Kilel Clinic</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
