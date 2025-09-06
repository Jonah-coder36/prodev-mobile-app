import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/_joinstyle";
import { GOOGLELOGO, FACEBOOKLOGO } from "@/constants";

export default function Join() {
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.iconsection}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Join Now</Text>
      </View>

      {/* Title */}
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Create an Account</Text>
        <Text style={styles.subText}>Sign up to get started</Text>
      </View>

      {/* Form */}
      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput style={styles.formControl} placeholder="Enter email" />
        </View>

        <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput
              style={styles.passwordControl}
              placeholder="Enter password"
              secureTextEntry
            />
          </View>
        </View>
      </View>

      {/* Join Button */}
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Join</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>Or</Text>
        <View style={styles.divider} />
      </View>

      {/* Social Buttons */}
      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={GOOGLELOGO} />
          <Text style={styles.secondaryButtonText}>Join with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={FACEBOOKLOGO} />
          <Text style={styles.secondaryButtonText}>Join with Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <Text style={styles.signupSubTitleText}>Sign In</Text>
      </View>
    </View>
  );
}