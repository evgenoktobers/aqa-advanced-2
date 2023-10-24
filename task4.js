function divide(numerator, denominator) {
    try {
      if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Обидва аргументи повинні бути числами");
      }
  
      if (denominator === 0) {
        throw new Error("Ділення на нуль не допускається");
      }
  
      return numerator / denominator;
    } catch (error) {
      console.error("Помилка: " + error.message);
    } finally {
      console.log("Робота завершена");
    }
  }
  
  console.log(divide(10, 0));
  