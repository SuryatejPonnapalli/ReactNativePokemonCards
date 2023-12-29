import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform
} from 'react-native'
import PokemonCard from './components/PokemonCard';

const App = () => {
  const charmanderData = {
    name: "Charmander",
    image: require("./assests/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  const squirtleData = {
    name: "Squirtle",
    image: require("./assests/squirtle.png"), 
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assests/bulbasaur.png"), 
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assests/pikachu.png"), 
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };
  return (
  <SafeAreaView style={styles.container}>
    <PokemonCard {...charmanderData} />
    <PokemonCard {...squirtleData} />
    <PokemonCard {...bulbasaurData} />
    <PokemonCard {...pikachuData} />
  </SafeAreaView> 
  )
}
 
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'f5f5f5',
    paddingTop: Platform.OS === 'android'? 25 : 0,
  }
});
export default App;