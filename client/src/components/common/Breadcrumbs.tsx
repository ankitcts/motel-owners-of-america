"use client";

import { Breadcrumbs as MuiBreadcrumbs, Typography, Link as MuiLink } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <MuiBreadcrumbs
      separator={<NavigateNext fontSize="small" sx={{ color: "text.secondary" }} />}
      sx={{ mb: 2 }}
    >
      {items.map((item, i) =>
        item.href && i < items.length - 1 ? (
          <MuiLink
            key={i}
            component={Link}
            href={item.href}
            variant="body2"
            color="text.secondary"
            underline="hover"
            sx={{ "&:hover": { color: "primary.main" } }}
          >
            {item.label}
          </MuiLink>
        ) : (
          <Typography key={i} variant="body2" color="text.primary" fontWeight={500}>
            {item.label}
          </Typography>
        )
      )}
    </MuiBreadcrumbs>
  );
}
