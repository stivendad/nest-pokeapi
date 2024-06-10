import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pokemon extends Document {
  // Id: string // Mongo me lo da
  @Prop({
    uinique: true,
    index: true,
  })
  name: string;

  @Prop({
    uinique: true,
    index: true,
  })
  no: number;
}

export const pokemonSchema = SchemaFactory.createForClass(Pokemon);
