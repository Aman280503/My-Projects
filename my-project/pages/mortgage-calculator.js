import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

export default function MortgageCalculator() {
  const router = useRouter();
  const { taxes = 265, zip = '421005' } = router.query;
  const [monthlyPayment, setMonthlyPayment] = useState(1529);
  const { register, handleSubmit, watch } = useForm({
    defaultValues: { homePrice: 300000, downPayment: 20, loanTerm: 30, interestRate: 6.5, propertyTaxes: taxes, hoa: 0 }
  });

  const homePrice = watch('homePrice');
  const downPayment = watch('downPayment');
  const loanTerm = watch('loanTerm');
  const interestRate = watch('interestRate');
  const propertyTaxes = watch('propertyTaxes');
  const hoa = watch('hoa');

  useEffect(() => {
    calculatePayment();
  }, [homePrice, downPayment, loanTerm, interestRate, propertyTaxes, hoa]);

  const calculatePayment = () => {
    const principal = homePrice * (1 - downPayment / 100);
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;
    let pmi = 0;
    if (downPayment < 20) pmi = principal * 0.005 / 12; // Approx 0.5% annual PMI
    const mortgage = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    const total = mortgage + parseFloat(propertyTaxes) + hoa + pmi;
    setMonthlyPayment(total.toFixed(0));
  };

  const onSubmit = (data) => {
    // Simulate pre-approval
    alert(`Estimated monthly payment: $${monthlyPayment}`);
  };

  return (
    <div>
      <Header />
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Estimate your monthly mortgage payments</h1>
          <h2 style={{ textAlign: 'center', color: '#28a745', fontSize: '2rem' }}>${monthlyPayment}/mo</h2>
          <p style={{ textAlign: 'center' }}>Zip: {zip} | Taxes: ${taxes}/mo</p>
          <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '600px', margin: '0 auto' }}>
            <label>Home Price: <input type="number" {...register('homePrice')} style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} /></label>
            <label>Down Payment (%): <input type="number" step="0.1" {...register('downPayment')} style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} /></label>
            <label>Loan Term (years): <input type="number" {...register('loanTerm')} style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} /></label>
            <label>Interest Rate (%): <input type="number" step="0.1" {...register('interestRate')} style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} /></label>
            <label>Property Taxes (monthly): <input type="number" {...register('propertyTaxes')} style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} /></label>
            <label>HOA (monthly): <input type="number" {...register('hoa')} style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} /></label>
            <button type="submit" style={{ backgroundColor: '#28a745', color: '#fff', padding: '1rem', width: '100%', border: 'none', borderRadius: '5px' }}>Get Pre-Approved</button>
          </form>
          {/* Breakdown */}
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <p>Principal & Interest: ${((monthlyPayment - propertyTaxes - hoa) * (100 - downPayment)/100).toFixed(0)}</p> {/* Simplified */}
          </div>
          {/* Three-Step Process from summary */}
          <div style={{ marginTop: '4rem' }}>
            <h3>#1 Share a few details</h3><p>Tell us about your income...</p>
            <h3>#2 See your homebuying budget</h3><p>In minutes...</p>
            <h3>#3 Get your pre-approval letter</h3><p>Download instantly...</p>
          </div>
          {/* Add customer review, resources, etc. from summary */}
        </div>
      </section>
      <Footer />
    </div>
  );
}