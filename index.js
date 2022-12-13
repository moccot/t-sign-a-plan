$(() => {
    const steps = $('div#steps');
    const plansContents = $('div.plan-content');
    const previousStepButtons = $('button.previous-step');
    const nextStepButtons = $('button.next-step');

    let currentStep = 1;

    function scrollToStep(stepIndex) {
        const stepsScrollDivision = steps[0].scrollWidth / 4;

        steps[0].scroll(stepsScrollDivision * (stepIndex - 1), 0);
    }

    function nextStep() {
        currentStep += 1;
        
        scrollToStep(currentStep);
    }

    function previousStep() {
        currentStep -= 1;

        scrollToStep(currentStep);
    }

    plansContents.click(event => nextStep());
    nextStepButtons.click(event => nextStep());
    previousStepButtons.click(event => previousStep());

    scrollToStep(currentStep);
});
