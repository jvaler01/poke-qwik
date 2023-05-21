import { $, component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/pokemon-image';


export default component$(() => {

  const pokemonId = useSignal<number>(1);
  const showBackImage = useSignal<boolean>(false);
  const isVisible = useSignal<boolean>(false);

  const changePokemonId = $(( value: number ) => {
    if ((pokemonId.value + value) <= 0) return;
    pokemonId.value += value
  })
  //const pokemonId = useStore();

  return (
    <>
      <span class="text-2xl">Buscador simple</span>

      <span class="text-9xl">{ pokemonId.value }</span>

      <PokemonImage id={pokemonId.value} backImage={showBackImage.value} isVisible={isVisible.value}/>
      <div class="mt-2">
        <button onClick$={ () => showBackImage.value = !showBackImage.value } class="btn btn-primary mr-2">Cambiar Vista</button>
        <button onClick$={ () => isVisible.value = !isVisible.value } class="btn btn-primary mr-2">Revelar</button>
      </div>
      <div class="mt-2">
        <button onClick$={ () => changePokemonId(-1) } class="btn btn-primary mr-2">Anterior</button>
        <button onClick$={ () => changePokemonId(1) } class="btn btn-primary">Siguiente</button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'PokeQwik',
  meta: [
    {
      name: 'description',
      content: 'PokeQuik project',
    },
  ],
};
