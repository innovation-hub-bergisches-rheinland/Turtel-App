import * as React from "react";
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg";
import { useHeaderHeight } from '@react-navigation/elements';

/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SVGComponent = (props) => (
  <Svg
    width={Platform.OS === 'android' ? useHeaderHeight() : useHeaderHeight()/2}
    height={Platform.OS === 'android' ? useHeaderHeight() : useHeaderHeight()/2}
    viewBox="0 0 60 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_231_1136)">
      <Rect x={2} width={52} height={56} rx={15} />
    </G>
    <G clipPath="url(#clip0_231_1136)">
      <Path
        d="M22.4436 35.8583C23.1282 37.5997 23.5614 39.4316 23.7298 41.2976C24.306 41.1234 24.921 41.1308 25.4929 41.3186C25.9878 41.4809 26.4478 41.7726 26.9499 41.9025C27.5734 42.0648 28.2266 41.9689 28.8512 42.1244C29.2826 42.2316 29.6886 42.4558 30.1223 42.5472C31.2804 42.7912 32.3813 42.0676 33.4884 41.6551C33.7597 41.5535 34.0427 41.4701 34.3309 41.4894C34.6067 41.5081 34.8718 41.621 35.1425 41.6869C35.5397 41.7793 35.9531 41.7723 36.347 41.6666C36.7409 41.5609 37.1033 41.3596 37.4027 41.0802C37.7711 40.7398 38.4036 40.1235 38.4165 39.6343C38.4429 38.6026 37.8722 37.8621 37.5437 37.0324C36.9284 35.4638 35.9956 34.0424 34.8049 32.8592L22.4436 35.8583Z"
        fill="#4C4C4C"
      />
      <Path
        d="M23.5586 44.7757C22.4431 45.9787 21.6051 46.0496 20.5193 46.6903C20.2947 46.8242 20.0312 47.0308 20.0846 47.2918L23.476 46.1546C23.5603 46.1263 23.658 46.0979 23.7338 46.1461C23.8096 46.1943 23.8315 46.3124 23.8349 46.4111C23.8675 47.348 23.6962 48.3303 24.0562 49.1918C24.4775 48.3973 24.2522 47.4195 24.3898 46.5275C24.3983 46.4188 24.4372 46.3149 24.5022 46.2278C24.6454 46.065 24.9043 46.0967 25.1082 46.1711C25.9507 46.4713 26.6247 47.2289 27.5167 47.3094C27.4762 46.9156 27.0617 46.6966 26.7129 46.515C25.7768 46.0296 24.9575 45.3424 24.3129 44.5021L23.5586 44.7757Z"
        fill="#DA8D82"
      />
      <Path
        d="M32.1607 41.5365C31.0399 42.0313 29.9366 42.5538 28.8507 43.1039C28.6232 43.2174 28.3626 43.3961 28.416 43.6197L31.8074 42.6414C31.8916 42.6175 31.9893 42.5943 32.0652 42.6346C32.141 42.6749 32.1629 42.777 32.1663 42.8616C32.1988 43.6657 32.0275 44.5072 32.3876 45.2501C32.8088 44.5691 32.5836 43.7292 32.7212 42.9643C32.7307 42.8685 32.77 42.7783 32.8335 42.7066C32.9768 42.567 33.2357 42.5931 33.4396 42.6567C34.2821 42.9143 34.9589 43.5647 35.848 43.6333C35.8076 43.2928 35.3931 43.1073 35.0443 42.9524C34.1328 42.554 33.3149 41.9656 32.6443 41.2255L32.1607 41.5365Z"
        fill="#DA8D82"
      />
      <Path
        d="M23.2968 40.2875C23.2379 41.7812 23.2754 43.2772 23.4091 44.766C23.476 45.5088 23.4563 45.1252 23.8978 45.7228C24.1545 45.1797 24.264 45.7171 24.291 45.1156C24.378 43.1941 24.3241 41.2715 24.3269 39.3489L23.2968 40.2875Z"
        fill="#DA8D82"
      />
      <Path
        d="M32.0033 36.5603C31.9444 38.054 31.9819 39.55 32.1157 41.0388C32.1819 41.7816 32.2229 41.7198 32.6644 42.3162C32.9211 41.7731 32.9936 41.9905 32.9975 41.3884C33.0099 39.4662 33.0218 37.5439 33.0334 35.6217L32.0033 36.5603Z"
        fill="#DA8D82"
      />
      <Path
        d="M39.3967 24.2818C39.8023 25.0865 40.0185 25.978 40.1191 26.8752C40.3819 29.2314 39.7461 31.8219 37.9364 33.3319C37.5101 33.6877 36.9315 33.9862 36.4199 33.7712C36.0211 33.6038 35.802 33.1787 35.6144 32.7849C35.2827 32.0869 34.9539 31.387 34.6281 30.6852C33.9968 29.3261 33.3767 27.9614 32.8645 26.5517C32.3747 25.2046 31.9658 23.7467 32.1905 22.3008C32.3342 21.365 32.7886 19.8839 33.9182 19.8011C34.9196 19.7279 36.1789 20.915 36.9254 21.491C37.9139 22.2543 38.8272 23.1503 39.3967 24.2818Z"
        fill="#BBA8B8"
      />
      <Path
        d="M39.3142 27.6549C39.4765 27.5216 39.6237 27.3705 39.7529 27.2043C39.9357 26.9474 40.0288 26.6364 40.0174 26.3202C40.0695 26.8589 40.1219 27.3973 40.1747 27.9352C40.1915 28.1083 40.2061 28.2927 40.1275 28.446C39.9933 28.7076 39.6563 28.7757 39.4367 28.9692C39.1985 29.1791 39.121 29.5139 38.9705 29.7948C38.7671 30.1739 38.4279 30.4565 38.0971 30.7289C37.2669 31.4127 36.257 30.402 36.7945 29.5315C37.0316 29.1474 37.4938 28.9499 37.8656 28.7371C38.3953 28.4318 38.8576 28.0584 39.3142 27.6549Z"
        fill="#4C4C4C"
      />
      <Path
        d="M38.6295 32.0597C39.0569 31.6091 39.381 31.07 39.6905 30.5275C39.7276 30.7499 39.6529 30.9741 39.5782 31.1869C39.3923 31.722 39.2041 32.2651 38.8963 32.7366C38.6829 33.0658 38.4166 33.3558 38.1515 33.6446L36.7322 35.187C36.8232 35.0877 36.7928 34.148 36.8586 33.934C36.9321 33.6951 37.0214 33.4023 37.1703 33.1963C37.5303 32.7054 38.2043 32.508 38.6295 32.0597Z"
        fill="#4C4C4C"
      />
      <Path
        d="M21.022 18.7455C21.022 18.7455 16.2916 20.919 15.872 24.7511C15.4524 28.5833 19.6487 34.0106 19.6487 34.0106L21.4017 28.5175L21.022 18.7455Z"
        fill="#BBA8B8"
      />
      <Path
        d="M16.2118 25.9706C16.2899 26.0223 16.3803 26.0558 16.4477 26.1205C16.5415 26.2107 16.5752 26.3475 16.6162 26.4689C16.7808 26.9302 17.1318 27.2946 17.4733 27.6436C17.4954 27.6735 17.528 27.6938 17.5643 27.7003C17.5999 27.6959 17.634 27.6834 17.6643 27.664C17.8109 27.6016 17.9609 27.7395 18.0625 27.8637C18.4433 28.3291 18.8455 28.8534 18.8247 29.4567C18.8208 29.5787 18.791 29.7126 18.6922 29.783C18.5326 29.8964 18.3164 29.775 18.1603 29.6564L17.4722 29.1338C17.3073 29.019 17.1578 28.8832 17.0274 28.7297C16.8409 28.4891 16.7566 28.1855 16.6207 27.9125C16.4623 27.5948 16.2169 27.437 16.0551 27.1215C15.9029 26.8236 15.7394 25.8163 15.8417 25.2227C15.8922 25.452 16.0074 25.8345 16.2118 25.9706Z"
        fill="#4C4C4C"
      />
      <Path
        d="M17.9564 32.0188C18.3496 32.7395 18.9051 33.408 19.6594 33.7144C19.3983 32.9313 19.1337 32.1419 18.7153 31.432C18.3547 30.8203 17.738 30.3232 17.0566 29.7398C17.2715 30.531 17.5733 31.2954 17.9564 32.0188Z"
        fill="#4C4C4C"
      />
      <Path
        d="M30.4036 35.8181C30.2105 36.8369 30.2616 37.8876 30.5525 38.8824C30.6755 39.3024 30.8513 39.7246 31.1737 40.0174C31.746 40.5355 32.6711 40.5003 33.3193 40.0832C33.9674 39.6661 34.3702 38.9482 34.6005 38.2043C34.8307 37.4603 34.9111 36.6852 35.0661 35.9247C35.2254 35.1459 35.4626 34.3854 35.7738 33.6548C35.83 33.5198 35.8575 33.3081 35.7176 33.2746L30.4036 35.8181Z"
        fill="#4D4875"
      />
      <Path
        d="M20.4043 35.6841C20.6194 36.5921 20.9823 37.4501 21.344 38.3064C21.7371 39.2393 21.9057 42.2736 23.5109 42.2736C25.8245 42.2736 25.6706 40.3227 25.8666 39.3869C25.9866 38.8143 26.0762 38.2356 26.1351 37.6533L20.4043 35.6841Z"
        fill="#4D4875"
      />
      <Path
        d="M37.5139 26.209C36.7438 24.7159 35.7508 23.3517 34.9105 21.8962C34.4488 21.0972 34.023 20.234 34.0017 19.309C33.9601 17.517 36.5253 14.4021 36.254 12.6304C36.117 11.7366 35.5283 10.9507 34.7734 10.4638C34.0186 9.9769 33.1154 9.76921 32.2167 9.74083C30.5721 9.68919 26.0495 10.8905 22.7806 15.8815C20.2676 19.7148 18.0462 23.8886 18.0316 28.4863C18.0243 30.8833 18.3765 35.2903 22.8772 37.6062C25.2463 38.8257 29.1331 39.022 31.7674 38.6577C36.254 38.0397 38.5148 32.9892 38.6849 31.0501C38.8315 29.3727 38.2828 27.7026 37.5139 26.209Z"
        fill="#9787AB"
      />
      <Path
        d="M31.4658 14.0202C31.4658 14.0202 30.0358 16.4853 30.6166 17.105C31.1973 17.7247 33.4738 15.5626 33.4738 15.5626L33.0542 14.0202H31.4658Z"
        fill="#4C4C4C"
      />
      <Path
        d="M31.6972 13.0299C32.0252 12.749 32.4796 12.6599 32.9093 12.6832C33.1374 12.6875 33.3616 12.7442 33.5648 12.8489C33.6656 12.9019 33.754 12.9762 33.8239 13.0668C33.8937 13.1574 33.9435 13.2621 33.9698 13.3738C34.3742 13.4181 34.71 13.7739 34.7819 14.1779C34.8538 14.582 34.6825 15.0093 34.3888 15.2902C34.095 15.5711 33.6839 15.7135 33.2783 15.7339C33.421 15.28 33.1295 14.7834 32.7273 14.5388C32.5123 14.4146 32.2776 14.3287 32.0337 14.2852C31.8652 14.2506 31.4956 14.2795 31.3832 14.1518C31.1142 13.8533 31.4686 13.2257 31.6972 13.0299Z"
        fill="#4D4875"
      />
      <Path
        d="M31.4216 11.0874C31.6535 11.3473 31.5198 11.8507 31.1239 12.2116C30.7279 12.5725 30.2184 12.6554 29.9865 12.396C29.7545 12.1367 29.8882 11.6334 30.2842 11.2719C30.6801 10.9104 31.1896 10.8281 31.4216 11.0874Z"
        fill="#AEAEAF"
      />
      <Path
        d="M31.177 11.3116C31.3298 11.4819 31.2422 11.8144 30.9805 12.0527C30.7187 12.2911 30.3834 12.3456 30.2306 12.1747C30.0778 12.0039 30.1655 11.6714 30.4272 11.4331C30.6889 11.1947 31.0243 11.1414 31.177 11.3116Z"
        fill="#BA5535"
      />
      <Path
        d="M30.9188 11.4756C31.0311 11.5358 31.0278 11.7026 30.9092 11.8507C30.7907 11.9988 30.6026 12.0686 30.4891 12.0085C30.3756 11.9483 30.3768 11.7815 30.4981 11.6328C30.6194 11.4841 30.8048 11.4149 30.9188 11.4756Z"
        fill="#4C4C4C"
      />
      <Path
        d="M30.6222 11.6521C30.6857 11.723 30.6492 11.8615 30.5402 11.9608C30.4313 12.0601 30.2914 12.0828 30.2279 12.0113C30.1645 11.9398 30.201 11.8019 30.3099 11.7026C30.4189 11.6033 30.5582 11.5789 30.6222 11.6521Z"
        fill="white"
      />
      <Path
        d="M35.5895 14.5513C35.6687 14.7358 35.5137 15.1699 35.243 15.52C34.9722 15.8701 34.688 16.0052 34.6088 15.8208C34.5296 15.6363 34.6847 15.2022 34.9554 14.8521C35.2261 14.502 35.5103 14.3669 35.5895 14.5513Z"
        fill="#AEAEAF"
      />
      <Path
        d="M35.4229 14.7675C35.4751 14.889 35.3729 15.175 35.1943 15.4065C35.0157 15.6381 34.8281 15.726 34.7759 15.6046C34.7236 15.4831 34.8258 15.1966 35.0045 14.9656C35.1831 14.7346 35.3707 14.6455 35.4229 14.7675Z"
        fill="#BA5535"
      />
      <Path
        d="M35.2576 14.9378C35.3082 14.9724 35.2773 15.1126 35.1896 15.2493C35.102 15.3861 34.9908 15.4695 34.9408 15.4343C34.8908 15.3991 34.9212 15.2595 35.0088 15.1228C35.0964 14.986 35.2076 14.9026 35.2576 14.9378Z"
        fill="#4C4C4C"
      />
      <Path
        d="M35.0712 15.1211C35.0931 15.1716 35.0504 15.2913 34.9763 15.3867C34.9022 15.482 34.8235 15.52 34.8022 15.4695C34.7808 15.419 34.823 15.2993 34.8971 15.2034C34.9712 15.1075 35.0493 15.07 35.0712 15.1211Z"
        fill="white"
      />
      <Path
        d="M28.285 43.6691C28.4756 43.5965 28.6611 43.5106 28.8399 43.412C28.8626 43.3983 28.8792 43.3761 28.8859 43.3502C28.8926 43.3243 28.889 43.2968 28.8758 43.2735C28.8621 43.2508 28.8401 43.2343 28.8146 43.2275C28.789 43.2207 28.7619 43.2242 28.7388 43.2372C28.6545 43.2838 28.569 43.3273 28.4821 43.3677L28.4175 43.3972L28.3855 43.4114L28.367 43.4194C28.3737 43.4194 28.3737 43.4194 28.367 43.4194C28.3215 43.4381 28.2765 43.4568 28.231 43.4761C28.2057 43.4838 28.1842 43.5011 28.1711 43.5243C28.1581 43.5476 28.1544 43.575 28.1608 43.601C28.1682 43.6268 28.1852 43.6486 28.2083 43.6619C28.2314 43.6751 28.2587 43.6787 28.2844 43.6719L28.285 43.6691Z"
        fill="#4C4C4C"
      />
      <Path
        d="M32.4705 45.3601C32.4896 45.2001 32.5087 45.0407 32.5267 44.8806C32.5267 44.8537 32.5161 44.8279 32.4973 44.8088C32.4784 44.7898 32.4528 44.7791 32.4262 44.7791C32.3998 44.7799 32.3748 44.7909 32.3562 44.8098C32.3376 44.8287 32.3269 44.854 32.3262 44.8806C32.3065 45.0407 32.2874 45.2001 32.27 45.3601C32.27 45.387 32.2805 45.4127 32.2993 45.4318C32.318 45.4508 32.3434 45.4616 32.37 45.4617C32.3964 45.461 32.4216 45.4501 32.4403 45.4312C32.459 45.4123 32.4698 45.3869 32.4705 45.3601Z"
        fill="#4C4C4C"
      />
      <Path
        d="M35.5336 43.5488L35.9599 43.8138C35.9829 43.8271 36.0101 43.8307 36.0358 43.8239C36.0614 43.8171 36.0834 43.8004 36.0969 43.7774C36.1098 43.7541 36.1133 43.7267 36.1066 43.7009C36.0999 43.6751 36.0835 43.6529 36.061 43.639L35.6347 43.3734C35.6116 43.3603 35.5844 43.3567 35.5589 43.3635C35.5333 43.3702 35.5113 43.3868 35.4976 43.4097C35.4847 43.4331 35.4813 43.4606 35.488 43.4865C35.4947 43.5124 35.511 43.5347 35.5336 43.5488Z"
        fill="#4C4C4C"
      />
      <Path
        d="M24.0012 48.9222H24.0225C24.0358 48.9228 24.049 48.9199 24.0607 48.9137C24.0731 48.9095 24.0843 48.9023 24.0933 48.8927C24.1029 48.8837 24.11 48.8723 24.1141 48.8598C24.1203 48.8479 24.1232 48.8346 24.1225 48.8212L24.1192 48.794C24.1142 48.7771 24.1054 48.7617 24.0933 48.7491L24.0731 48.7332C24.0577 48.7242 24.0403 48.7195 24.0225 48.7196H24.0012C23.9878 48.719 23.9744 48.722 23.9624 48.7281C23.9503 48.7324 23.9393 48.7396 23.9304 48.7491C23.921 48.7582 23.9138 48.7695 23.9097 48.782C23.9034 48.7941 23.9005 48.8076 23.9012 48.8212L23.9046 48.8479C23.9093 48.8648 23.9182 48.8802 23.9304 48.8927L23.9507 48.9086C23.966 48.9176 23.9835 48.9223 24.0012 48.9222Z"
        fill="#4C4C4C"
      />
      <Path
        d="M24.0095 48.9193H24.0157L23.9652 48.9052C23.9563 48.9008 23.9486 48.8943 23.9428 48.8861C23.937 48.878 23.9333 48.8686 23.932 48.8586C23.932 48.8626 23.932 48.8666 23.932 48.8705C23.932 48.8745 23.932 48.8938 23.9348 48.9052C23.9348 48.9284 23.9388 48.9517 23.941 48.975C23.945 49.0238 23.9494 49.072 23.9534 49.1202C23.9612 49.2156 23.9697 49.3103 23.9775 49.404C23.9781 49.4307 23.9889 49.4562 24.0076 49.4752C24.0263 49.4941 24.0516 49.505 24.0781 49.5056C24.1045 49.5051 24.1298 49.4942 24.1485 49.4753C24.1672 49.4563 24.1778 49.4307 24.1781 49.404C24.1679 49.2905 24.1584 49.1719 24.1483 49.0555C24.1432 48.9988 24.1382 48.942 24.1337 48.8808C24.1338 48.8462 24.1269 48.8121 24.1135 48.7803C24.1037 48.7607 24.0887 48.7442 24.0701 48.7326C24.0516 48.7211 24.0302 48.715 24.0084 48.7151C23.9819 48.7155 23.9567 48.7264 23.938 48.7453C23.9193 48.7643 23.9087 48.7899 23.9084 48.8166C23.9089 48.8433 23.9196 48.8687 23.9382 48.8876C23.9569 48.9064 23.982 48.9172 24.0084 48.9176L24.0095 48.9193Z"
        fill="#4C4C4C"
      />
      <Path
        d="M27.1955 47.2062L27.4404 47.3282L27.5584 47.3877L27.6173 47.4173C27.6269 47.4218 27.6359 47.4258 27.6443 47.4309L27.6561 47.4382C27.6489 47.4349 27.6431 47.4291 27.6398 47.4218C27.6538 47.4438 27.6748 47.4602 27.6993 47.4683C27.7262 47.4763 27.755 47.4732 27.7797 47.4598C27.8023 47.4459 27.8188 47.4236 27.8255 47.3976C27.8322 47.3717 27.8287 47.3441 27.8156 47.3208C27.7976 47.2956 27.7749 47.2742 27.7488 47.2578C27.7291 47.2464 27.7078 47.2368 27.6875 47.2271L27.5612 47.1636L27.2994 47.0331C27.2764 47.0199 27.2492 47.0164 27.2236 47.0231C27.198 47.0299 27.1761 47.0465 27.1624 47.0694C27.1495 47.0927 27.1461 47.1201 27.1528 47.1459C27.1595 47.1717 27.1758 47.1939 27.1983 47.2079L27.1955 47.2062Z"
        fill="#4C4C4C"
      />
      <Path
        d="M19.9106 47.4275C20.1284 47.2832 20.3554 47.1537 20.5902 47.0399C20.6131 47.0263 20.6297 47.0041 20.6364 46.9781C20.6432 46.9522 20.6395 46.9246 20.6262 46.9014C20.6124 46.8786 20.5904 46.8621 20.5649 46.8554C20.5393 46.8486 20.5122 46.8521 20.4891 46.8651C20.255 46.9791 20.0285 47.1086 19.8112 47.2527C19.7887 47.2667 19.7725 47.2889 19.7658 47.3146C19.7591 47.3404 19.7625 47.3678 19.7752 47.3911C19.7889 47.4142 19.811 47.4309 19.8367 47.4377C19.8624 47.4444 19.8898 47.4408 19.9128 47.4275H19.9106Z"
        fill="#4C4C4C"
      />
      <Path
        d="M22.4997 18.1122C22.1966 18.5847 21.9317 19.0812 21.7078 19.5967C21.6953 19.6202 21.692 19.6476 21.6987 19.6734C21.7054 19.6992 21.7214 19.7215 21.7437 19.7358C21.7668 19.7492 21.7943 19.7529 21.82 19.746C21.8458 19.739 21.8678 19.7221 21.8813 19.6989C22.1049 19.183 22.3695 18.6864 22.6727 18.2138C22.7429 18.1043 22.5694 18.0027 22.4997 18.1117V18.1122Z"
        fill="#AEAEAF"
      />
      <Path
        d="M21.0574 20.8667C20.7601 21.5503 20.583 22.281 20.5339 23.026C20.5255 23.1565 20.726 23.1559 20.7345 23.026C20.781 22.3164 20.9496 21.6205 21.2327 20.9695C21.2452 20.946 21.2484 20.9186 21.2417 20.8928C21.2351 20.867 21.219 20.8447 21.1967 20.8304C21.1736 20.8171 21.1463 20.8134 21.1206 20.8202C21.0949 20.827 21.0728 20.8437 21.0591 20.8667H21.0574Z"
        fill="#AEAEAF"
      />
      <Path
        d="M22.1628 20.3742C22.0647 20.7597 21.9662 21.1448 21.8673 21.5296C21.8353 21.6556 22.0285 21.7095 22.0611 21.5835L22.356 20.4281C22.3886 20.3016 22.1954 20.2482 22.1628 20.3742Z"
        fill="#AEAEAF"
      />
      <Path
        d="M20.9834 24.9429V26.731C20.9853 26.7566 20.9967 26.7805 21.0153 26.7979C21.0339 26.8153 21.0583 26.825 21.0837 26.825C21.109 26.825 21.1335 26.8153 21.152 26.7979C21.1706 26.7805 21.182 26.7566 21.1839 26.731V24.9429C21.182 24.9174 21.1706 24.8935 21.152 24.8761C21.1335 24.8586 21.109 24.8489 21.0837 24.8489C21.0583 24.8489 21.0339 24.8586 21.0153 24.8761C20.9967 24.8935 20.9853 24.9174 20.9834 24.9429Z"
        fill="#AEAEAF"
      />
      <Path
        d="M19.9064 24.4674C19.6083 25.3352 19.4682 26.2504 19.493 27.1686C19.5007 27.4271 19.5213 27.6851 19.5548 27.9415C19.5558 27.9681 19.5667 27.9933 19.5854 28.012C19.6041 28.0308 19.6291 28.0417 19.6554 28.0425C19.7037 28.0425 19.7626 27.9954 19.7553 27.9415C19.6379 27.0488 19.6818 26.1421 19.8851 25.2653C19.9439 25.0137 20.0155 24.7654 20.0997 24.5213C20.1423 24.3976 19.9486 24.3448 19.9064 24.4674Z"
        fill="#AEAEAF"
      />
      <Path
        d="M19.0056 30.0207C19.1938 30.8632 19.4359 31.6925 19.7302 32.5034C19.774 32.6248 19.9677 32.5726 19.9234 32.4501C19.6292 31.6389 19.3871 30.8095 19.1988 29.9668C19.1707 29.8397 18.9741 29.893 19.0056 30.0235V30.0207Z"
        fill="#AEAEAF"
      />
      <Path
        d="M20.6501 33.4954L21.7206 34.8397C21.7396 34.8586 21.7651 34.8692 21.7917 34.8692C21.8183 34.8692 21.8438 34.8586 21.8627 34.8397C21.881 34.8205 21.8912 34.7949 21.8912 34.7682C21.8912 34.7416 21.881 34.716 21.8627 34.6967L20.7916 33.3518C20.7727 33.3331 20.7473 33.3226 20.7209 33.3226C20.6944 33.3226 20.669 33.3331 20.6501 33.3518C20.6318 33.3711 20.6216 33.3968 20.6216 33.4236C20.6216 33.4503 20.6318 33.476 20.6501 33.4954Z"
        fill="#AEAEAF"
      />
      <Path
        d="M22.7155 33.7683C22.9988 34.0499 23.2492 34.3633 23.4619 34.7024C23.5305 34.8125 23.704 34.7109 23.6349 34.6002C23.4135 34.2462 23.1525 33.9191 22.857 33.6253C22.7649 33.5339 22.6234 33.677 22.7155 33.7683Z"
        fill="#AEAEAF"
      />
      <Path
        d="M33.3284 22.8524C33.7264 23.3377 34.1131 23.832 34.4883 24.3352C34.5021 24.3578 34.5241 24.3742 34.5496 24.381C34.5751 24.3878 34.6022 24.3844 34.6253 24.3715C34.6482 24.3579 34.6648 24.3357 34.6715 24.3097C34.6783 24.2838 34.6746 24.2562 34.6613 24.233C34.2763 23.7155 33.8794 23.2074 33.4705 22.7088C33.3879 22.6083 33.2458 22.7525 33.3284 22.8524Z"
        fill="#AEAEAF"
      />
      <Path
        d="M35.875 25.5189C36.3522 26.0365 36.7055 26.6577 36.9079 27.3348C36.945 27.4591 37.1387 27.4063 37.1011 27.2781C36.8886 26.5674 36.5178 25.9153 36.0171 25.3719C35.9289 25.276 35.7874 25.4196 35.875 25.5149V25.5189Z"
        fill="#AEAEAF"
      />
      <Path
        d="M36.2905 28.3529C36.5034 28.9505 36.5445 29.5968 36.409 30.2171C36.3815 30.3436 36.5747 30.3981 36.6028 30.2738C36.7483 29.6175 36.7076 28.933 36.4854 28.299C36.4422 28.1776 36.2484 28.2298 36.2917 28.3529H36.2905Z"
        fill="#AEAEAF"
      />
      <Path
        d="M37.8049 31.0745C37.8073 31.6353 37.7002 32.1911 37.4898 32.71C37.4829 32.7359 37.4864 32.7634 37.4996 32.7867C37.5127 32.81 37.5344 32.8271 37.56 32.8343C37.5855 32.8408 37.6126 32.8371 37.6355 32.824C37.6584 32.8109 37.6754 32.7894 37.683 32.7639C37.899 32.2275 38.0085 31.6535 38.0054 31.0745C38.0054 30.9446 37.8043 30.944 37.8049 31.0745Z"
        fill="#AEAEAF"
      />
      <Path
        d="M34.7628 36.3339L35.5851 35.3124C35.6032 35.2931 35.6133 35.2675 35.6133 35.2409C35.6133 35.2143 35.6032 35.1887 35.5851 35.1694C35.5758 35.16 35.5648 35.1525 35.5526 35.1474C35.5405 35.1424 35.5275 35.1397 35.5143 35.1397C35.5012 35.1397 35.4882 35.1424 35.476 35.1474C35.4639 35.1525 35.4528 35.16 35.4436 35.1694L34.6213 36.1909C34.6031 36.2102 34.593 36.2358 34.593 36.2624C34.593 36.289 34.6031 36.3146 34.6213 36.3339C34.6401 36.3527 34.6655 36.3633 34.692 36.3633C34.7185 36.3633 34.744 36.3527 34.7628 36.3339Z"
        fill="#AEAEAF"
      />
      <Path
        d="M24.4095 15.4253L25.4048 14.0066C25.4795 13.8999 25.306 13.7989 25.2318 13.9044L24.2365 15.3231C24.1618 15.4298 24.3354 15.5314 24.4095 15.4258V15.4253Z"
        fill="#AEAEAF"
      />
      <Path
        d="M24.6685 19.4169C24.8755 18.7768 25.083 18.1368 25.2908 17.4971C25.3307 17.3728 25.1375 17.32 25.097 17.4432L24.4752 19.363C24.4348 19.4872 24.6286 19.5406 24.6685 19.4169Z"
        fill="#AEAEAF"
      />
      <Path
        d="M25.4058 20.8168C25.4851 20.3007 25.6 19.7908 25.7496 19.2909C25.7872 19.1655 25.5934 19.1121 25.5564 19.237C25.4068 19.7369 25.2919 20.2468 25.2126 20.7629C25.2064 20.7887 25.2102 20.8159 25.2231 20.839C25.2361 20.862 25.2572 20.8793 25.2823 20.8872C25.3079 20.8942 25.3352 20.8907 25.3583 20.8776C25.3814 20.8644 25.3985 20.8426 25.4058 20.8168Z"
        fill="#AEAEAF"
      />
      <Path
        d="M26.0592 22.2889C26.1441 21.7728 26.1843 21.2503 26.1794 20.7272C26.1794 20.5966 25.9778 20.5966 25.9789 20.7272C25.985 21.2321 25.9475 21.7366 25.8666 22.2349C25.8605 22.2609 25.8644 22.2881 25.8774 22.3113C25.8904 22.3344 25.9116 22.3518 25.9368 22.3598C25.9624 22.3666 25.9898 22.363 26.0129 22.3498C26.0359 22.3365 26.053 22.3146 26.0603 22.2889H26.0592Z"
        fill="#AEAEAF"
      />
      <Path
        d="M27.0634 22.799C27.1278 22.3734 27.1922 21.9476 27.2566 21.5216C27.2628 21.4959 27.2591 21.4687 27.2461 21.4456C27.2332 21.4225 27.2121 21.4053 27.187 21.3974C27.1613 21.3904 27.1339 21.3939 27.1108 21.4072C27.0877 21.4205 27.0706 21.4424 27.0634 21.4683C26.999 21.8939 26.9346 22.3195 26.8702 22.7451C26.8639 22.7709 26.8676 22.7982 26.8805 22.8213C26.8935 22.8444 26.9147 22.8616 26.9399 22.8694C26.9655 22.8762 26.9927 22.8727 27.0158 22.8596C27.0389 22.8464 27.056 22.8247 27.0634 22.799Z"
        fill="#AEAEAF"
      />
      <Path
        d="M28.4143 20.7913C28.4137 20.4964 28.4913 20.2068 28.639 19.9526C28.6525 19.9293 28.6563 19.9016 28.6495 19.8755C28.6428 19.8494 28.6261 19.8271 28.6031 19.8135C28.58 19.7999 28.5526 19.7961 28.5268 19.8029C28.501 19.8097 28.4789 19.8266 28.4655 19.8498C28.3013 20.1358 28.2152 20.4607 28.2161 20.7913C28.218 20.8168 28.2293 20.8407 28.2479 20.8582C28.2665 20.8756 28.291 20.8853 28.3163 20.8853C28.3417 20.8853 28.3661 20.8756 28.3847 20.8582C28.4033 20.8407 28.4147 20.8168 28.4166 20.7913H28.4143Z"
        fill="#AEAEAF"
      />
      <Path
        d="M29.0333 21.3951C29.076 21.1181 29.1183 20.8414 29.1602 20.5649C29.1664 20.5389 29.1626 20.5116 29.1495 20.4884C29.1365 20.4652 29.1152 20.4479 29.09 20.44C29.0644 20.433 29.0371 20.4366 29.014 20.4499C28.991 20.4632 28.9741 20.4851 28.967 20.5109C28.9243 20.7879 28.882 21.0646 28.84 21.3412C28.8339 21.3671 28.8377 21.3944 28.8507 21.4176C28.8638 21.4408 28.885 21.4581 28.9103 21.466C28.9359 21.473 28.9632 21.4694 28.9862 21.4561C29.0093 21.4429 29.0262 21.4209 29.0333 21.3951Z"
        fill="#AEAEAF"
      />
      <Path
        d="M29.8966 21.6845C29.9217 21.3016 29.9474 20.9188 29.9736 20.5359C29.982 20.4054 29.7815 20.406 29.773 20.5359C29.7472 20.9184 29.7216 21.3012 29.6961 21.6845C29.6871 21.8144 29.8876 21.8139 29.8966 21.6845Z"
        fill="#AEAEAF"
      />
      <Path
        d="M32.1662 21.1244C31.8971 20.5037 31.8584 19.8058 32.0572 19.1587C32.0954 19.0338 31.9017 18.9805 31.8635 19.1048C31.652 19.8049 31.6981 20.5586 31.9932 21.2271C32.0069 21.25 32.0289 21.2666 32.0545 21.2734C32.08 21.2802 32.1072 21.2766 32.1303 21.2634C32.1528 21.2494 32.1692 21.2271 32.1759 21.2012C32.1826 21.1753 32.1791 21.1478 32.1662 21.1244Z"
        fill="#AEAEAF"
      />
      <Path
        d="M33.07 20.9825L32.8509 18.9396C32.8501 18.913 32.8392 18.8876 32.8205 18.8687C32.8019 18.8499 32.7768 18.8389 32.7504 18.838C32.7238 18.8382 32.6984 18.849 32.6796 18.868C32.6609 18.887 32.6504 18.9128 32.6504 18.9396L32.8694 20.9825C32.8704 21.0091 32.8814 21.0343 32.9 21.0531C32.9187 21.0718 32.9437 21.0827 32.97 21.0835C32.9965 21.0835 33.0219 21.0729 33.0407 21.054C33.0594 21.035 33.07 21.0093 33.07 20.9825Z"
        fill="#AEAEAF"
      />
      <Path
        d="M27.3515 12.5601C27.6642 12.2594 28.0352 12.0275 28.4411 11.8791C28.4664 11.8713 28.4878 11.854 28.5008 11.8308C28.5139 11.8076 28.5176 11.7802 28.5113 11.7542C28.504 11.7285 28.4869 11.7067 28.4638 11.6935C28.4407 11.6803 28.4134 11.6769 28.3878 11.6839C27.9481 11.8442 27.5463 12.0954 27.2082 12.4216C27.1144 12.5118 27.2565 12.6548 27.3498 12.5646L27.3515 12.5601Z"
        fill="#AEAEAF"
      />
      <Path
        d="M32.537 23.7183C32.9728 24.1723 33.3902 24.6452 33.789 25.137C33.871 25.2375 34.0136 25.0933 33.9305 24.9934C33.5325 24.5043 33.1153 24.0314 32.6791 23.5747C32.5892 23.4811 32.4477 23.6241 32.537 23.7183Z"
        fill="#AEAEAF"
      />
      <Path
        d="M33.9517 21.4836L34.8869 23.0884C34.952 23.2019 35.1256 23.0987 35.0599 22.9863L34.1264 21.3815C34.1197 21.37 34.1109 21.36 34.1005 21.3519C34.09 21.3439 34.078 21.338 34.0653 21.3346C34.0526 21.3313 34.0393 21.3305 34.0263 21.3323C34.0132 21.3341 34.0007 21.3385 33.9893 21.3452C33.978 21.3519 33.968 21.3608 33.9601 21.3714C33.9521 21.3819 33.9463 21.394 33.943 21.4069C33.9396 21.4197 33.9388 21.4331 33.9406 21.4463C33.9424 21.4595 33.9467 21.4721 33.9534 21.4836H33.9517Z"
        fill="#AEAEAF"
      />
      <Path
        d="M33.4524 19.7051C33.4879 19.1541 33.563 18.6063 33.6771 18.0663C33.704 17.9392 33.5086 17.8847 33.4839 18.0124C33.367 18.5703 33.2902 19.136 33.2541 19.7051C33.2463 19.8357 33.4468 19.8351 33.4546 19.7051H33.4524Z"
        fill="#AEAEAF"
      />
      <Path
        d="M21.9942 37.8093C22.1548 38.3325 22.2801 38.866 22.3694 39.4062C22.3908 39.5344 22.584 39.4805 22.5632 39.3495C22.4733 38.8104 22.3478 38.2781 22.1874 37.756C22.1498 37.6317 21.956 37.685 21.9942 37.8127V37.8093Z"
        fill="#AEAEAF"
      />
      <Path
        d="M22.5733 40.2324C22.7392 40.6384 22.9053 41.0441 23.0715 41.4497C23.0792 41.4751 23.0963 41.4965 23.1192 41.5096C23.142 41.5227 23.169 41.5264 23.1945 41.52C23.2201 41.5129 23.2418 41.4958 23.255 41.4725C23.2681 41.4492 23.2716 41.4216 23.2647 41.3957C23.0985 40.9898 22.9324 40.5843 22.7665 40.1791C22.7587 40.1536 22.7416 40.1321 22.7186 40.1189C22.6957 40.1058 22.6686 40.1019 22.643 40.1081C22.6175 40.1154 22.5959 40.1326 22.5829 40.1558C22.5698 40.1791 22.5664 40.2066 22.5733 40.2324Z"
        fill="#AEAEAF"
      />
      <Path
        d="M32.0134 39.9158C32.3959 39.9027 32.848 39.8556 33.0749 39.4987C33.1446 39.3886 32.971 39.287 32.9014 39.3965C32.7199 39.6831 32.3155 39.703 32.0134 39.7132C31.8842 39.7177 31.8836 39.9203 32.0134 39.9158Z"
        fill="#AEAEAF"
      />
      <Path
        d="M32.7447 39.1179L33.1205 38.6038C33.1338 38.5806 33.1375 38.553 33.1307 38.5271C33.124 38.5011 33.1074 38.4789 33.0845 38.4653C33.0614 38.4523 33.0341 38.4488 33.0085 38.4556C32.9828 38.4623 32.9608 38.4788 32.9469 38.5016C32.8222 38.673 32.6971 38.8433 32.5717 39.0124C32.5584 39.0357 32.5547 39.0633 32.5614 39.0894C32.5681 39.1154 32.5847 39.1377 32.6077 39.1514C32.6308 39.1641 32.6578 39.1674 32.6833 39.1607C32.7088 39.154 32.7307 39.1376 32.7447 39.1151V39.1179Z"
        fill="#AEAEAF"
      />
      <Path
        d="M33.7681 39.1531L34.0186 38.513C34.0255 38.4871 34.022 38.4595 34.0089 38.4362C33.9957 38.4129 33.974 38.3959 33.9484 38.3887C33.9229 38.3822 33.8959 38.3858 33.8729 38.3989C33.85 38.412 33.833 38.4336 33.8254 38.4591C33.7415 38.6724 33.658 38.8858 33.5749 39.0992C33.5678 39.125 33.5712 39.1526 33.5843 39.1759C33.5973 39.1992 33.619 39.2163 33.6446 39.2234C33.6702 39.23 33.6973 39.2264 33.7203 39.2133C33.7433 39.2002 33.7604 39.1786 33.7681 39.1531Z"
        fill="#AEAEAF"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_231_1136">
        <Rect
          width={24.375}
          height={39.7681}
          transform="translate(15.8125 9.73914)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SVGComponent;