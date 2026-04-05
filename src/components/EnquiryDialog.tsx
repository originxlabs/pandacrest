import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "919876543210"; // Replace with actual number

interface EnquiryDialogProps {
  trigger?: React.ReactNode;
}

const EnquiryDialog = ({ trigger }: EnquiryDialogProps) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    gradeApplied: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.parentName || !form.childName || !form.email || !form.phone || !form.gradeApplied) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);

    // Build WhatsApp message
    const waMessage = encodeURIComponent(
      `🐼 *New Enquiry - Panda Crest International School*\n\n` +
      `👤 Parent: ${form.parentName}\n` +
      `👶 Child: ${form.childName}\n` +
      `🎂 Age: ${form.childAge}\n` +
      `🎓 Grade: ${form.gradeApplied}\n` +
      `📧 Email: ${form.email}\n` +
      `📞 Phone: ${form.phone}\n` +
      `💬 Message: ${form.message || "N/A"}`
    );

    // Build mailto link
    const subject = encodeURIComponent(`New Enquiry - ${form.parentName} | ${form.gradeApplied}`);
    const body = encodeURIComponent(
      `New Enquiry from Panda Crest Website\n\n` +
      `Parent Name: ${form.parentName}\n` +
      `Child Name: ${form.childName}\n` +
      `Child Age: ${form.childAge}\n` +
      `Grade Applied For: ${form.gradeApplied}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Message: ${form.message || "N/A"}`
    );

    // Open mailto
    window.open(`mailto:office@pandacrest.com?subject=${subject}&body=${body}`, "_self");

    // Open WhatsApp in new tab
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`, "_blank");

    toast.success("Enquiry submitted! Check your email client and WhatsApp.");
    setSubmitting(false);
    setOpen(false);
    setForm({ parentName: "", childName: "", childAge: "", gradeApplied: "", email: "", phone: "", message: "" });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-float">
            Enquiry Now
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto rounded-3xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-foreground">Admission Enquiry</DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">
            Fill in the details below and we'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="parentName" className="text-xs font-semibold">Parent Name *</Label>
              <Input id="parentName" value={form.parentName} onChange={(e) => handleChange("parentName", e.target.value)} placeholder="Full name" required />
            </div>
            <div>
              <Label htmlFor="childName" className="text-xs font-semibold">Child Name *</Label>
              <Input id="childName" value={form.childName} onChange={(e) => handleChange("childName", e.target.value)} placeholder="Child's name" required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="childAge" className="text-xs font-semibold">Child Age</Label>
              <Input id="childAge" value={form.childAge} onChange={(e) => handleChange("childAge", e.target.value)} placeholder="e.g. 3 years" />
            </div>
            <div>
              <Label htmlFor="gradeApplied" className="text-xs font-semibold">Grade Applied For *</Label>
              <Select value={form.gradeApplied} onValueChange={(v) => handleChange("gradeApplied", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select grade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Nursery">Nursery</SelectItem>
                  <SelectItem value="LKG">LKG</SelectItem>
                  <SelectItem value="UKG">UKG</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="email" className="text-xs font-semibold">Email *</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="your@email.com" required />
            </div>
            <div>
              <Label htmlFor="phone" className="text-xs font-semibold">Phone *</Label>
              <Input id="phone" type="tel" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="+91 98765 43210" required />
            </div>
          </div>
          <div>
            <Label htmlFor="message" className="text-xs font-semibold">Message (Optional)</Label>
            <Textarea id="message" value={form.message} onChange={(e) => handleChange("message", e.target.value)} placeholder="Any specific questions or requirements..." rows={3} />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 rounded-full bg-accent text-accent-foreground font-bold text-sm shadow-float hover:scale-[1.02] transition-all disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnquiryDialog;
