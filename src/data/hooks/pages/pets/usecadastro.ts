import { useState } from "react";

export function useCadastro() {
  const [nome, setNome] = useState(""),
    [historia, setHistoria] = useState(""),
    [foto, setFoto] = useState(""),
    [mensagem, setMensagem] = useState("");

  function cadastrar() {}

  function validarFormulario() {
    return nome.length > 2 && historia.length > 20 && foto.length > 0
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
