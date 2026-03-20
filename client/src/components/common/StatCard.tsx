"use client";

import { Card, CardContent, Typography, Box } from "@mui/material";
import type { SvgIconComponent } from "@mui/icons-material";
import { formatNumber } from "@/utils/format";

interface StatCardProps {
  title: string;
  value: number;
  icon: SvgIconComponent;
  color: string;
}

export default function StatCard({ title, value, icon: Icon, color }: StatCardProps) {
  return (
    <Card
      sx={{
        "&:hover": {
          borderColor: color,
          transform: "translateY(-2px)",
          transition: "all 0.2s ease",
        },
      }}
    >
      <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: `${color}15`,
            }}
          >
            <Icon sx={{ color, fontSize: 22 }} />
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
              {formatNumber(value)}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {title}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
