export function checkRequiredFields(data: any, requiredFields: string[]): string[] {
  return requiredFields.filter(field => data[field] === undefined || data[field] === null);
}

export function validateInputData(data: any, requiredFields: string[]): string {
  const missingFields = checkRequiredFields(data, requiredFields);

  if (missingFields.length > 0) {
    const missingFieldsString = missingFields.join(', ');
    return `Por favor, preencha os campos obrigatórios: ${missingFieldsString}`;
  }

  return ''; // Nenhum erro encontrado
}

