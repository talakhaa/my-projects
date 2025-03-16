document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".section-3-buttons");
    const contents = document.querySelectorAll(".section-3-div-2-content");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // ყველა კონტენტის დამალვა
            contents.forEach(content => content.style.display = "none");

            // ყველა ღილაკის აქტივობის სტილის მოხსნა
            buttons.forEach(btn => btn.style.borderBottom = "none");

            // შესაბამისი კონტენტის ჩვენება
            const value = this.innerText.replace("★", "").trim(); // იღებს რიცხვს ღილაკიდან
            const contentDiv = document.getElementById(`section-3-div-2-content-${value}`);
            if (contentDiv) {
                contentDiv.style.display = "flex"; // აჩვენებს შესაბამის კონტენტს
            }

            // გააქტიურებული ღილაკის სტილის დამატება
            this.style.borderBottom = "2px solid green";
        });
    });
});
