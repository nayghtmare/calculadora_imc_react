    import React, { useState } from 'react';

    function IMCForm() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setIMC] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    const calcularIMC = (e) => {
        e.preventDefault();
        if (altura && peso) {
        const alturaEmMetros = altura / 100;
        const imcCalculado = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2);
        setIMC(imcCalculado);
        setClassificacao(classificarIMC(imcCalculado));
        }
    };

    const classificarIMC = (imc) => {
        if (imc < 18.5) return 'Abaixo do peso';
        if (imc >= 18.5 && imc <= 24.9) return 'Peso normal';
        if (imc >= 25 && imc <= 29.9) return 'Sobrepeso';
        if (imc >= 30 && imc <= 34.9) return 'Obesidade grau 1';
        if (imc >= 35 && imc <= 39.9) return 'Obesidade grau 2';
        if (imc >= 40) return 'Obesidade grau 3';
        return '';
    };

    return (
        <div>
        <form onSubmit={calcularIMC}>
            <div>
            <label>
                Altura (cm):
                <input
                type="number"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                />
            </label>
            </div>
            <div>
            <label>
                Peso (kg):
                <input
                type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                />
            </label>
            </div>
            <button type="submit">Calcular IMC</button>
        </form>
        {imc && (
            <div>
            <h2>Seu IMC: {imc}</h2>
            <h3>Classificação: {classificacao}</h3>
            </div>
        )}
        </div>
    );
    }

    export default IMCForm;
