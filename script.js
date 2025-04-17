let totalInvestmentValue = 0;
let totalLossValue = 0;
let totalGainValue = 0;

function addInvestment() {
    const investmentAmount = parseFloat(document.getElementById('investmentAmount').value);
    if (!isNaN(investmentAmount)) {
        totalInvestmentValue += investmentAmount;
        document.getElementById('totalInvestment').innerText = `Total Investment: ${totalInvestmentValue}`;
    }
}

function addLossGain() {
    const lossGainAmount = parseFloat(document.getElementById('lossGainAmount').value);
    if (!isNaN(lossGainAmount)) {
        if (lossGainAmount < 0) {
            totalLossValue += Math.abs(lossGainAmount);
            document.getElementById('totalLoss').innerText = `Total Loss: ${totalLossValue}`;
        } else {
            totalGainValue += lossGainAmount;
            document.getElementById('totalGain').innerText = `Total Gain: ${totalGainValue}`;
        }
    }
}
