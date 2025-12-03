export default function OrderForm() {
  const handleOrder = (formData: FormData) => {
    const restrictions = formData.getAll("restrictions") as string[];
    console.log("Dietary restrictions:", restrictions);
  };

  return (
    <form action={handleOrder}>
      <fieldset>
        <legend>Dietary restrictions:</legend>
        <label>
          <input type="checkbox" name="restrictions" value="vegan" />
          Vegan
        </label>
        <label>
          <input type="checkbox" name="restrictions" value="gluten-free" />
          Gluten-free
        </label>
        <label>
          <input type="checkbox" name="restrictions" value="nut-free" />
          Nut-free
        </label>
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  );
}
