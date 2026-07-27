"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const inquirySchema = z.object({
  brandStage: z.string().optional(),
  businessType: z.string().optional(),
  lookingFor: z.string().optional(),
  source: z.string().optional(),
  skus: z.string().optional(),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(8, "Phone is required"),
});

const fullInquirySchema = inquirySchema.superRefine((data, ctx) => {
  const required = ["brandStage", "businessType", "lookingFor", "source", "skus"] as const;
  for (const field of required) {
    if (!data[field]?.length) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Required", path: [field] });
    }
  }
});

export type InquiryFormValues = z.infer<typeof inquirySchema>;

const selectClass =
  "flex h-11 w-full rounded-lg border border-input bg-card px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

type InquiryFormProps = {
  compact?: boolean;
};

export function InquiryForm({ compact }: InquiryFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(compact ? inquirySchema : fullInquirySchema),
  });

  const onSubmit = async (values: InquiryFormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    console.info("Inquiry (UI-only):", values);
    toast.success("Request received. Our team will contact you shortly.");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {!compact ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Brand stage" error={errors.brandStage?.message}>
            <select className={selectClass} {...register("brandStage")}>
              <option value="">Select</option>
              <option value="0-1">0–1 Years</option>
              <option value="1-3">1–3 Years</option>
              <option value="3+">3+ Years</option>
            </select>
          </Field>
          <Field label="Type of business" error={errors.businessType?.message}>
            <select className={selectClass} {...register("businessType")}>
              <option value="">Select</option>
              <option value="bpc">Beauty & Personal Care</option>
              <option value="colour">Colour Cosmetics</option>
              <option value="pharma">Pharmaceuticals Ointment</option>
              <option value="rx">Prescription-Based Cosmetics</option>
              <option value="other">Other</option>
            </select>
          </Field>
          <Field label="Looking for" error={errors.lookingFor?.message}>
            <select className={selectClass} {...register("lookingFor")}>
              <option value="">Select</option>
              <option value="private-label">Private label / Third party</option>
              <option value="trading">Trading and Distribution</option>
              <option value="export">Third party export</option>
              <option value="other">Others</option>
            </select>
          </Field>
          <Field label="How did you hear about us?" error={errors.source?.message}>
            <select className={selectClass} {...register("source")}>
              <option value="">Select</option>
              <option value="social">Social Media</option>
              <option value="google">Google</option>
              <option value="wom">Word of mouth</option>
              <option value="reference">Reference</option>
              <option value="other">Other</option>
            </select>
          </Field>
          <Field label="Current total SKUs" error={errors.skus?.message}>
            <select className={selectClass} {...register("skus")}>
              <option value="">Select</option>
              <option value="0">0</option>
              <option value="1-5">1–5</option>
              <option value="5-10">5–10</option>
              <option value="10+">10+</option>
            </select>
          </Field>
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <Input {...register("name")} placeholder="Your name" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <Input type="email" {...register("email")} placeholder="you@brand.com" />
        </Field>
        <Field label="Phone" error={errors.phone?.message} className="sm:col-span-2">
          <Input {...register("phone")} placeholder="+91 ..." />
        </Field>
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label className="mb-2 block">{label}</Label>
      {children}
      {error ? <p className="mt-1 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
