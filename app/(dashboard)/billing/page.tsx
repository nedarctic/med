import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const billing = [
  {
    id: "INV-4001",
    patientId: "PT-1001",
    patientName: "Amina Hassan",
    date: "2026-06-24",
    amount: "$180.00",
    status: "Paid",
    method: "Card",
  },
  {
    id: "INV-4002",
    patientId: "PT-1002",
    patientName: "Daniel Brooks",
    date: "2026-06-23",
    amount: "$240.00",
    status: "Pending",
    method: "Insurance",
  },
  {
    id: "INV-4003",
    patientId: "PT-1003",
    patientName: "Sofia Nguyen",
    date: "2026-06-22",
    amount: "$320.00",
    status: "Overdue",
    method: "Cash",
  },
  {
    id: "INV-4004",
    patientId: "PT-1004",
    patientName: "Noah Alvarez",
    date: "2026-06-21",
    amount: "$95.00",
    status: "Paid",
    method: "Mobile Money",
  },
  {
    id: "INV-4005",
    patientId: "PT-1005",
    patientName: "Grace Thompson",
    date: "2026-06-20",
    amount: "$410.00",
    status: "Pending",
    method: "Card",
  },
]

export default function BillingPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">Billing</h1>
        <p className="text-sm text-muted-foreground">
          Review invoices, balances, and payment status for patients.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Billing Overview</CardTitle>
          <CardDescription>
            Billing records with patient identifiers for future detail navigation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Patient ID</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment Method</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {billing.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell>{invoice.id}</TableCell>
                  <TableCell>
                    <Link
                      href={`/patients/${invoice.patientId}`}
                      className="font-medium text-primary hover:underline"
                    >
                      {invoice.patientId}
                    </Link>
                  </TableCell>
                  <TableCell>{invoice.patientName}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        invoice.status === "Paid"
                          ? "secondary"
                          : invoice.status === "Pending"
                            ? "outline"
                            : "destructive"
                      }
                    >
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{invoice.method}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
