"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { api } from "@/trpc/react";
import { formatCurrency } from "@/utils";
import { DollarSign } from "lucide-react";

export default function TotalRevenue() {
  const [data] = api.billings.getTotalSales.useSuspenseQuery();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
        <DollarSign className="text-muted-foreground size-4" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {formatCurrency(data.total ?? 0)}
        </div>
        <p className="text-muted-foreground text-xs">
          {`${data.percentageChange > 0 ? "+" : ""}${data.percentageChange.toFixed(1)}%`}{" "}
          from last month
        </p>
      </CardContent>
    </Card>
  );
}
