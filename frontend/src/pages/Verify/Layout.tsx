
// Définition de l'état global du formulaire (les fichiers)
export interface FormData {
  rccmFile: File | null;
  cniFile: File | null;
  nifFile: File | null; // NIF : Numéro d'Identification Fiscale
}

// Définition des propriétés (Props) communes à toutes les étapes
export interface StepProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  nextStep: () => void;
  prevStep: () => void; 
}