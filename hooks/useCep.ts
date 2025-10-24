import { useState, useEffect, useCallback } from 'react';

export const useCep = () => {
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [complement, setComplement] = useState('');
  const [isFetchingAddress, setIsFetchingAddress] = useState(false);
  const [addressError, setAddressError] = useState('');

  const resetAddress = useCallback(() => {
    setCep('');
    setStreet('');
    setNumber('');
    setNeighborhood('');
    setComplement('');
    setAddressError('');
    setIsFetchingAddress(false);
  }, []);

  useEffect(() => {
    const fetchAddress = async (cepToFetch: string) => {
      setIsFetchingAddress(true);
      setAddressError('');
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cepToFetch}/json/`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        if (data.erro) {
          setAddressError('CEP não encontrado.');
          setStreet('');
          setNeighborhood('');
        } else {
          setStreet(data.logradouro || '');
          setNeighborhood(data.bairro || '');
        }
      } catch (error) {
        setAddressError('Erro ao buscar CEP.');
        console.error("Error fetching CEP:", error);
      } finally {
        setIsFetchingAddress(false);
      }
    };

    const cleanedCep = cep.replace(/\D/g, '');
    if (cleanedCep.length === 8) {
      fetchAddress(cleanedCep);
    } else {
      setStreet('');
      setNeighborhood('');
      setAddressError('');
    }
  }, [cep]);

  return {
    cep,
    setCep,
    street,
    setStreet,
    number,
    setNumber,
    neighborhood,
    setNeighborhood,
    complement,
    setComplement,
    isFetchingAddress,
    addressError,
    resetAddress,
  };
};