// src/Layout.tsx

export interface FormData {
  rccmFile: File | null;
  cniFile: File | null;
  nifFile: File | null;
}

export interface StepProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  nextStep: () => void;
  prevStep: () => void; 
}