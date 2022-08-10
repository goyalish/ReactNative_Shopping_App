import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

export default function ItemDetails() {

  const route = useRoute();

  const runBeforeFirst = `
      window.isNativeApp = true;
      true; // note: this is required, or you'll sometimes get silent failures
  `;

  const detailsHtml = `
  <div style=" border: 2px solid #101111; margin: 0 auto; 
    height:100%; width: 100%; text-align: center;">
    <div style="display: flex; flex-direction:row; justify-content: space-around;">
        <h1 style="font-size:100px" id="item_name">${route.params.item.name}</h1>
        <h1 style="font-size:100px" id="price">${route.params.item.price}</h1>
    </div>
    <h5 style="font-size:50px" id="desc">${route.params.item.description}</h5>
    <h style="font-size:50px" id="manufacturer">Manufacturer: ${route.params.item.manufacturer}</h5>
    <img src=${route.params.item.Image} alt="item_image"  
    style="height: 40%; width: 80%; margin-top:30px"/>
</div>
  `;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ html: detailsHtml }}
        injectedJavaScriptBeforeContentLoaded={runBeforeFirst}
      />
    </SafeAreaView>
  );

}