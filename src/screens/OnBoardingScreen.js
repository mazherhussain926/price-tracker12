import { View, Text, Image,ImageBackground, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/themes.js";
import AppIntroSlider from "react-native-app-intro-slider";
import CustomButton from "../components/CustomButton.js";
import { useNavigation } from "@react-navigation/native";

export default function OnBoarding() {
  //const [showHomePage, setShowHomePage] = useState(true);
  const navigation = useNavigation()
  const slides = [
    {
      id: 1,
      description: "Quickly find any product        you need.",
      image: require("../../assets/images/welcome-screen/1.png"),
    },
    {
      id: 2,
      description:
        "Track price trends with our interactive charts, guiding smarter buying decisions.",
      image: require("../../assets/images/welcome-screen/2.png"),
    },
    {
      id: 3,
      description:
        "Never miss a deal:                          Get notified of price drops on your Wishlist.",
      image: require("../../assets/images/welcome-screen/3.png"),
    },
  ];

  return (
    <>
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => {
          return (
            <View style={styles.slide}>
              <ImageBackground
                source={require("../../assets/images/welcome-screen/background.png")}
                style={styles.imageBackground}
              >
                <Image
                  source={item.image}
                  style={styles.image}
                  resizeMode="contain"
                />
                <Text style={styles.description}>
                  {item.description}
                </Text>
              </ImageBackground>
            </View>
          );
        }}
        activeDotStyle={styles.activeDot}
        dotStyle={styles.dot}
      />
      <View style={styles.buttonContainer}>
        <CustomButton title="Get Started" onPress={() =>navigation.replace("WelcomeScreen") } />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    padding: 15,
    paddingTop: 100,
    backgroundColor: COLORS.BACKGROUND,
    
  },
  imageBackground: {
    width: SIZES.width,
    height: SIZES.height - 400,
    alignItems: "center",
  },
  image: {
    width: SIZES.width - 80,
    height: 300,
  
  },
  description: {
   
    textAlign: "center",
    marginBottom:10,
    marginLeft: 10,
    marginRight: 10,
    color: COLORS.title,
    fontFamily: "OpenSans-Bold",
    fontSize: 23.04,
  },
  activeDot: {
    backgroundColor: COLORS.PRIMARY,
    width: 19.28,
    height:5.76
  },
  dot:{
    width: 9.6,
    height: 5.76,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: COLORS.BACKGROUND,
    padding:20,
    
    width: "100%",
    height: "18%",
    justifyContent: "center",
    alignItems: "center",
 
  },
});
