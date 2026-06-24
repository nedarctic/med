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

const patients = [
  {
    id: "PT-1001",
    name: "Amina Hassan",
    age: 34,
    gender: "Female",
    phone: "+254 700 111 222",
    status: "Stable",
    lastVisit: "2026-06-12",
    nextAppointment: "2026-06-25",
  },
  {
    id: "PT-1002",
    name: "Daniel Brooks",
    age: 41,
    gender: "Male",
    phone: "+254 700 222 333",
    status: "Follow-up",
    lastVisit: "2026-06-10",
    nextAppointment: "2026-06-24",
  },
  {
    id: "PT-1003",
    name: "Sofia Nguyen",
    age: 29,
    gender: "Female",
    phone: "+254 700 333 444",
    status: "Critical",
    lastVisit: "2026-06-08",
    nextAppointment: "2026-06-26",
  },
  {
    id: "PT-1004",
    name: "Noah Alvarez",
    age: 52,
    gender: "Male",
    phone: "+254 700 444 555",
    status: "Stable",
    lastVisit: "2026-06-07",
    nextAppointment: "2026-06-27",
  },
  {
    id: "PT-1005",
    name: "Grace Thompson",
    age: 47,
    gender: "Female",
    phone: "+254 700 555 666",
    status: "Pending Review",
    lastVisit: "2026-06-05",
    nextAppointment: "2026-06-28",
  },
]

export default function PatientsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">Patients</h1>
        <p className="text-sm text-muted-foreground">
          Manage patient records, visit history, and upcoming appointments.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Patient Directory</CardTitle>
          <CardDescription>
            A general list of patients with identifiers ready for detail pages.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Visit</TableHead>
                <TableHead>Next Appointment</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell>
                    <Link
                      href={`/patients/${patient.id}`}
                      className="font-medium text-primary hover:underline"
                    >
                      {patient.id}
                    </Link>
                  </TableCell>
                  <TableCell>{patient.name}</TableCell>
                  <TableCell>{patient.age}</TableCell>
                  <TableCell>{patient.gender}</TableCell>
                  <TableCell>{patient.phone}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        patient.status === "Stable"
                          ? "secondary"
                          : patient.status === "Critical"
                            ? "destructive"
                            : "outline"
                      }
                    >
                      {patient.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{patient.lastVisit}</TableCell>
                  <TableCell>{patient.nextAppointment}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
