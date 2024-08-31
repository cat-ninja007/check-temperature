# Check Temperature

## Objective

Create a function called `checkTemperature` that categorizes temperatures into three groups: **"Too Cold"**, **"Just Right"**, or **"Too Hot"**. This function will help determine how comfortable the temperature is based on given thresholds.

## Description

**Function Name:** `checkTemperature`

**Parameters:**
- `temperature` (number): Represents the temperature in degrees.

**Function Behavior:**
- **If the temperature is below 15 degrees:**  
  The function should return `"Too Cold"`.
- **If the temperature is between 15 and 25 degrees, inclusive:**  
  The function should return `"Just Right"`.
- **If the temperature is above 25 degrees:**  
  The function should return `"Too Hot"`.

## Input and Expected Outputs

### Test Case 1

- **Input:** `10`  
- **Expected Output:** `"Too Cold"`  
- **Explanation:** The temperature of 10 degrees is below the lower threshold of 15 degrees, so it is categorized as "Too Cold".

### Test Case 2

- **Input:** `20`  
- **Expected Output:** `"Just Right"`  
- **Explanation:** The temperature of 20 degrees falls within the range of 15 to 25 degrees, inclusive, so it is categorized as "Just Right".

### Test Case 3

- **Input:** `30`  
- **Expected Output:** `"Too Hot"`  
- **Explanation:** The temperature of 30 degrees is above the upper threshold of 25 degrees, so it is categorized as "Too Hot".

### Test Case 4

- **Input:** `15`  
- **Expected Output:** `"Just Right"`  
- **Explanation:** The temperature of 15 degrees is exactly at the lower threshold of the "Just Right" range.

### Test Case 5

- **Input:** `25`  
- **Expected Output:** `"Just Right"`  
- **Explanation:** The temperature of 25 degrees is exactly at the upper threshold of the "Just Right" range.

### Test Case 6

- **Input:** `5`  
- **Expected Output:** `"Too Cold"`  
- **Explanation:** The temperature of 5 degrees is below the lower threshold of 15 degrees, so it is categorized as "Too Cold".

### Test Case 7

- **Input:** `26`  
- **Expected Output:** `"Too Hot"`  
- **Explanation:** The temperature of 26 degrees is above the upper threshold of 25 degrees, so it is categorized as "Too Hot".

## Installation

To use this function in your project, simply copy the `checkTemperature` function into your JavaScript file and call it with the desired temperature values.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes. Ensure that you have tested your changes thoroughly before submitting.
