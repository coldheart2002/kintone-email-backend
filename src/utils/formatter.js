const formatQuotationData = (record) => {
  const toEmail = record.Email.value;
  const customerName = record.Customer.value;
  const total = record.Total.value;

  const items =
    record.Items?.value.map((row) => ({
      ItemName: row.value.ItemName.value,
      Quantity: row.value.Quantity.value,
      Price: row.value.Price.value,
    })) || [];

  return { toEmail, customerName, items, total };
};

module.exports = {
  formatQuotationData,
};
