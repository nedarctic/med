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

const reports = [
  {
    id: "RPT-5001",
    title: "Daily Patient Census",
    category: "Operations",
    generatedAt: "2026-06-24 08:00",
    status: "Ready",
    owner: "Dr. Amina Hassan",
    summary: "Overview of checked-in patients and pending visits",
  },
  {
    id: "RPT-5002",
    title: "Appointment No-Show Analysis",
    category: "Scheduling",
    generatedAt: "2026-06-23 17:30",
    status: "Processing",
    owner: "Sara Nwosu",
    summary: "Breakdown of missed appointments and follow-up needs",
  },
  {
    id: "RPT-5003",
    title: "Revenue Summary",
    category: "Finance",
    generatedAt: "2026-06-22 12:15",
    status: "Ready",
    owner: "Lina Ortiz",
    summary: "Monthly billing performance and outstanding balances",
  },
  {
    id: "RPT-5004",
    title: "Consultation Outcomes",
    category: "Clinical",
    generatedAt: "2026-06-21 09:45",
    status: "Ready",
    owner: "Dr. Daniel Brooks",
    summary: "Review of completed consultations and follow-up recommendations",
  },
  {
    id: "RPT-5005",
    title: "Vaccination Compliance",
    category: "Population Health",
    generatedAt: "2026-06-20 16:00",
    status: "Archived",
    owner: "Dr. Priya Singh",
    summary: "Coverage of scheduled vaccines and overdue patients",
  },
]

export default function ReportsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">Reports</h1>
        <p className="text-sm text-muted-foreground">
          Review generated reports and operational insights across the clinic.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Report Library</CardTitle>
          <CardDescription>
            Report entries with identifiers ready for future detail pages.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Generated At</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Summary</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell>
                    <Link
                      href={`/reports/${report.id}`}
                      className="font-medium text-primary hover:underline"
                    >
                      {report.id}
                    </Link>
                  </TableCell>
                  <TableCell>{report.title}</TableCell>
                  <TableCell>{report.category}</TableCell>
                  <TableCell>{report.generatedAt}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        report.status === "Ready"
                          ? "secondary"
                          : report.status === "Processing"
                            ? "outline"
                            : "destructive"
                      }
                    >
                      {report.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{report.owner}</TableCell>
                  <TableCell>{report.summary}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
