import { Button } from "@mui/material";
import { Pet } from "../../../data/@types/Pet";
import { TextService } from "../../../data/services/TextService";
import {
  ListStyled,
  ListItem,
  PhotoPet,
  Information,
  Name,
  Description,
} from "./List.styled";

interface ListProps {
  pets: Pet[];
}

export default function List(props: ListProps) {
  const maxSizeTextLength = 260;

  return (
    <div>
      <ListStyled>
        {props.pets.map((pet) => (
          <ListItem key={pet.id}>
            <PhotoPet src={pet.photo} />
            <Information>
              <Name>{pet.name}</Name>
              <Description>
                {TextService.limitSizeText(pet.history, maxSizeTextLength)}
              </Description>
              <Button variant={"contained"} fullWidth>
                Adotar {pet.name}
              </Button>
            </Information>
          </ListItem>
        ))}
      </ListStyled>
    </div>
  );
}
