import React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  // Placeholder for PDF upload and dynamic table rendering
  return (
    <section className="w-full py-12 md:py-20 px-6 md:px-12 bg-background min-h-screen">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-foreground mb-2">Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent pricing. No hidden fees. Built for teams of all sizes.
          </p>
        </div>

        {/* PDF Upload Placeholder */}
        <div className="flex flex-col items-center justify-center py-8">
          <label htmlFor="pdf-upload" className="mb-4 text-lg font-medium text-foreground">Upload your pricing PDF</label>
          <input id="pdf-upload" type="file" accept="application/pdf" className="mb-4" />
          <Button variant="default" disabled>Upload & Extract Tables (Coming Soon)</Button>
        </div>

        {/* Example Table (to be replaced with dynamic content) */}
        <div className="bg-card rounded-xl border border-border p-6 shadow-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Plan</TableHead>
                <TableHead>Monthly</TableHead>
                <TableHead>Yearly</TableHead>
                <TableHead>Features</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Starter</TableCell>
                <TableCell>$20</TableCell>
                <TableCell>$200</TableCell>
                <TableCell>Basic AI, 100 meetings/mo</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Growth</TableCell>
                <TableCell>$99</TableCell>
                <TableCell>$999</TableCell>
                <TableCell>Unlimited meetings, API access</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Enterprise</TableCell>
                <TableCell>Custom</TableCell>
                <TableCell>Custom</TableCell>
                <TableCell>White-label, Dedicated support</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Pricing;