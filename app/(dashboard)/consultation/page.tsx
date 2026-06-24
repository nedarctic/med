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

const consultations = [
  {
    id: "CONS-3001",
    patientId: "PT-1001",
    patientName: "Amina Hassan",
    date: "2026-06-24",
    doctor: "Dr. Amina Hassan",
    specialty: "General Medicine",
    status: "Completed",
    notes: "Routine follow-up and medication review",
  },
  {
    id: "CONS-3002",
    patientId: "PT-1002",
    patientName: "Daniel Brooks",
    date: "2026-06-23",
    doctor: "Dr. Daniel Brooks",
    specialty: "Cardiology",
    status: "Pending",
    notes: "Monitoring post-procedure recovery",
  },
  {
    id: "CONS-3003",
    patientId: "PT-1003",
    patientName: "Sofia Nguyen",
    date: "2026-06-22",
    doctor: "Dr. Sofia Nguyen",
    specialty: "Neurology",
    status: "Completed",
    notes: "Migraine management and treatment adjustment",
  },
  {
    id: "CONS-3004",
    patientId: "PT-1004",
    patientName: "Noah Alvarez",
    date: "2026-06-21",
    doctor: "Dr. Priya Singh",
    specialty: "Pediatrics",
    status: "In Review",
    notes: "Vaccination record and growth monitoring",
  },
  {
    id: "CONS-3005",
    patientId: "PT-1005",
    patientName: "Grace Thompson",
    date: "2026-06-20",
    doctor: "Dr. Michael Tan",
    specialty: "Dermatology",
    status: "Completed",
    notes: "Skin condition assessment and treatment plan",
  },
]

export default function ConsultationsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">Consultations</h1>
        <p className="text-sm text-muted-foreground">
          Track consultation history, care plans, and clinical notes.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Consultation Records</CardTitle>
          <CardDescription>
            Consultation entries with patient identifiers for future detail navigation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Consultation ID</TableHead>
                <TableHead>Patient ID</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Specialty</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {consultations.map((consultation) => (
                <TableRow key={consultation.id}>
                  <TableCell>{consultation.id}</TableCell>
                  <TableCell>
                    <Link
                      href={`/patients/${consultation.patientId}`}
                      className="font-medium text-primary hover:underline"
                    >
                      {consultation.patientId}
                    </Link>
                  </TableCell>
                  <TableCell>{consultation.patientName}</TableCell>
                  <TableCell>{consultation.date}</TableCell>
                  <TableCell>{consultation.doctor}</TableCell>
                  <TableCell>{consultation.specialty}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        consultation.status === "Completed"
                          ? "secondary"
                          : consultation.status === "Pending"
                            ? "outline"
                            : "destructive"
                      }
                    >
                      {consultation.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{consultation.notes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
