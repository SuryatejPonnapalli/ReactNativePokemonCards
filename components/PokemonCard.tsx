import { View,
    Text,
    StyleSheet,
    Platform,
    Image,
    ScrollView
} from "react-native";

const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
      case "electric":
        return { borderColor: "#FFD700", emoji: "⚡️" };
      case "water":
        return { borderColor: "#6493EA", emoji: "💧" };
      case "fire":
        return { borderColor: "#FF5733", emoji: "🔥" };
      case "grass":
        return { borderColor: "#66CC66", emoji: "🌿" };
      default:
        return { borderColor: "#A0A0A0", emoji: "❓" };
    }
  };

const PokemonCard = ({
    name,
    image,
    type,
    hp,
    moves,
    weaknesses
}) => {
    const { borderColor,emoji } = getTypeDetails(type);

    return(
        <View style={styles.card}>
            <View style = {styles.nameContainer}>
                <Text style = {[styles.name,styles.text]}>{name}</Text>
                <Text style = {[styles.hp,styles.text]}>❤️{hp}</Text>
            </View>
            <Image accessibilityLabel={`${name} pokemon`} source={image} style={ styles.image } resizeMode="contain"></Image>
            <View style={styles.typeContainer}>
                <View style={[styles.badge, { borderColor }]}>
                    <Text style={ styles.typeEmoji }>{emoji}</Text>
                    <Text style={ [styles.typeText,styles.text] }>{type}</Text>
                </View>
            </View>
            <View style={ styles.movesContainer }>
                <Text style={[styles.movesText,styles.text]}>{moves.join(", ")}</Text>
            </View>
            <View>
                <Text style={[styles.text ]}>{weaknesses.join(", ")}</Text>
            </View>
        </View>
    );
    
       
}
const styles = StyleSheet.create({
    card:{
        backgroundColor: 'white',
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios:{
                shadowOffset: { width: 2,height: 2 },
                shadowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android:{
                elevation: 5
            }
        }),
    },
    nameContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 32
    },
    name:{
        fontSize: 30,
        fontWeight: 'bold'
    },
    hp:{
        fontSize: 22
    },
    image:{
        width: "100%",
        height: 200,
        marginBottom:20,
    },
    text:{
        color:'black'
    },
    typeContainer:{
        marginBottom: 40,
        alignItems: 'center'
    },
    badge:{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 4,

    },
    typeEmoji:{
        fontSize: 30,
        marginRight: 12,
    },
    typeText:{
        fontSize: 22,
        fontWeight: 'bold'
    },
    movesContainer:{
        marginBottom: 16
    },
    movesText:{
        fontSize: 22,
        fontWeight: 'bold'
    },
    weaknessContainer:{
        fontSize: 20,
        fontWeight: 'bold'  
    }
    })

export default PokemonCard;