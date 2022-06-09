import { AxiosError } from "axios";
import { useState, useEffect } from "react"
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
  const [listPets, setListPets] = useState<Pet[]>([]),
    [petSelected, setPetSelected] = useState<Pet | null>(null),
    [email, setEmail] = useState(''),
    [value, setValue] = useState(''),
    [message, setMessage] = useState('');
  
  useEffect(() => {
    ApiService.get('/pets')
      .then(resposta => {
        setListPets(resposta.data)
      })
  }, [])

  useEffect(() => {
    if (petSelected === null) {
      limparFormulario()
    }
  }, [petSelected])
  
  function adotar() {
    if (petSelected !== null) {
      if (validarDadosAdoção()) {
        ApiService.post('/adocoes', {
          pet_id: petSelected.id,
          email,
          valor: value
        })
          .then(() => {
            setPetSelected(null)
            setMessage('Pet adotado com sucesso!')
          })
          .catch((error: AxiosError) => {
          /* setMessage(error.response?.data.message) */
          setMessage(error.message)
        })
      } else {
        return setMessage('É Necessário preencher todos os campos corretamente!')
      }
    }
  }

  function validarDadosAdoção() {
    return email.length > 0 && value.length > 0
  }

  function limparFormulario() {
    setEmail('')
    setValue('')
  }

  return {
    listPets,
    petSelected,
    setPetSelected,
    email,
    setEmail,
    value,
    setValue,
    message,
    setMessage,
    adotar,
    limparFormulario
  };
}
