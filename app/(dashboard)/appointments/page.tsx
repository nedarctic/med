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

const appointments = [
  {
    id: "APT-2001",
    patientId: "PT-1001",
    patientName: "Amina Hassan",
    date: "2026-06-24",
    time: "09:00",
    type: "General Checkup",
    status: "Confirmed",
    doctor: "Dr. Amina Hassan",
  },
  {
    id: "APT-2002",
    patientId: "PT-1002",
    patientName: "Daniel Brooks",
    date: "2026-06-24",
    time: "11:30",
    type: "Follow-up",
    status: "Pending",
    doctor: "Dr. Daniel Brooks",
  },
  {
    id: "APT-2003",
    patientId: "PT-1003",
    patientName: "Sofia Nguyen",
    date: "2026-06-25",
    time: "08:15",
    type: "Cardiology Review",
    status: "Confirmed",
    doctor: "Dr. Sofia Nguyen",
  },
  {
    id: "APT-2004",
    patientId: "PT-1004",
    patientName: "Noah Alvarez",
    date: "2026-06-25",
    time: "14:00",
    type: "Vaccination",
    status: "Completed",
    doctor: "Dr. Priya Singh",
  },
  {
    id: "APT-2005",
    patientId: "PT-1005",
    patientName: "Grace Thompson",
    date: "2026-06-26",
    time: "10:45",
    type: "Specialist Consultation",
    status: "Confirmed",
    doctor: "Dr. Michael Tan",
  },
]

export default function AppointmentsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">Appointments</h1>
        <p className="text-sm text-muted-foreground">
          Review upcoming visits, patient details, and care team assignments.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Appointments</CardTitle>
          <CardDescription>
            Appointment records with patient identifiers for future detail navigation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Appointment ID</TableHead>
                <TableHead>Patient ID</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Doctor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>{appointment.id}</TableCell>
                  <TableCell>
                    <Link
                      href={`/patients/${appointment.patientId}`}
                      className="font-medium text-primary hover:underline"
                    >
                      {appointment.patientId}
                    </Link>
                  </TableCell>
                  <TableCell>{appointment.patientName}</TableCell>
                  <TableCell>{appointment.date}</TableCell>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>{appointment.type}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        appointment.status === "Confirmed"
                          ? "secondary"
                          : appointment.status === "Completed"
                            ? "outline"
                            : "destructive"
                      }
                    >
                      {appointment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{appointment.doctor}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
