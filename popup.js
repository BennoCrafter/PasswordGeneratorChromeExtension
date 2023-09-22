document.addEventListener("DOMContentLoaded", function () {
  const copyButton = document.getElementById("copyButton");

  copyButton.addEventListener("click", function () {
        const password = generatePassword() // Replace with the actual password
        navigator.clipboard.writeText(password);
  });

  const btn = document.querySelector("#copyButton");
  const btnText = document.querySelector("#btnText");

  btn.onclick = () => {
      btnText.innerHTML = "Copied!";
      btn.classList.add("active");
  };
});


function generatePassword(length = 12) {
  // Define the character sets for the password
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numericChars = '0123456789';
  const specialChars = '!@#$%^&*()-_+=<>?';

  // Combine all character sets into one string
  const allChars = uppercaseChars + lowercaseChars + numericChars + specialChars;

  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
}