"use client";

import {
  Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Typography, Chip, IconButton, Box,
} from "@mui/material";
import { OpenInNew } from "@mui/icons-material";
import Link from "next/link";
import type { Property } from "@/types";
import { propertyTypeLabel } from "@/utils/format";
import { PROPERTY_TYPE_COLORS } from "@/utils/colors";
import { getOwnerById } from "@/data/mockProperties";

interface PropertyTableProps {
  properties: Property[];
  stateSlug?: string;
}

export default function PropertyTable({ properties }: PropertyTableProps) {
  return (
    <Card>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Property Name</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Type</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>City</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Owner</TableCell>
              <TableCell sx={{ fontWeight: 600, display: { xs: "none", md: "table-cell" } }}>Rooms</TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="right">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {properties.map((p) => {
              const owner = p.ownerIds[0] ? getOwnerById(p.ownerIds[0]) : null;
              return (
                <TableRow
                  key={p.id}
                  sx={{ "&:hover": { bgcolor: "rgba(92, 158, 255, 0.04)" } }}
                >
                  <TableCell>
                    <Typography variant="body2" fontWeight={500}>
                      {p.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {p.address}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={propertyTypeLabel(p.propertyType)}
                      size="small"
                      sx={{
                        bgcolor: `${PROPERTY_TYPE_COLORS[p.propertyType]}20`,
                        color: PROPERTY_TYPE_COLORS[p.propertyType],
                        fontWeight: 500,
                        fontSize: "0.7rem",
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{p.city}</Typography>
                  </TableCell>
                  <TableCell>
                    {owner ? (
                      <Link href={`/owners/${owner.slug}`}>
                        <Typography
                          variant="body2"
                          sx={{ color: "primary.main", "&:hover": { textDecoration: "underline" } }}
                        >
                          {owner.name}
                        </Typography>
                      </Link>
                    ) : (
                      <Typography variant="body2" color="text.secondary">—</Typography>
                    )}
                  </TableCell>
                  <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                    <Typography variant="body2">{p.roomsCount || "—"}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      component={Link}
                      href={`/properties/${p.slug}`}
                      target="_blank"
                      size="small"
                      sx={{ color: "primary.main" }}
                    >
                      <OpenInNew fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
