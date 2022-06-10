import { AxiosError } from "axios";
import { useState } from "react";
import { ApiService } from "../../../services/ApiService";

export function useCadastro() {
  const [nome, setNome] = useState(""),
    [historia, setHistoria] = useState(""),
    [foto, setFoto] = useState(""),
    [mensagem, setMensagem] = useState("");

  function cadastrar() {
    if (validarFormulario()){
     ApiService.post('/pets', {
        nome,
        historia,
        foto
      })
        .then(() => {
          limpar()
          setMensagem("Pet Cadastrado com sucesso")
        })
        .catch((error: AxiosError) => {
        setMensagem(error.message)
      })
    } else {
      setMensagem('Preencha todos os campos')
    }
  }

  function validarFormulario() {
    return nome.length > 2 && historia.length > 20 && foto.length > 5
  }

  function limpar() {
    setNome('')
    setHistoria('')
    setFoto('')
  }

  return {
    nome,
    setNome,
    historia,
    setHistoria,
    foto,
    setFoto,
    cadastrar,
    mensagem,
    setMensagem,
  };
}
