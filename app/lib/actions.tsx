"use server";

export async function createInvoice(formData: FormData) {
  const rawFormData = {
    customerId: formData.get("customerId"),
    amount: formData.get("amout"),
    status: formData.get("status"),
  };

  console.log(rawFormData);
}
