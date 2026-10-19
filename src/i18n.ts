import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          // Global / SignIn & SignUp
          welcome: 'Welcome back',
          subtitle: 'Log in to manage your fulfillment!',
          email: 'Email address*',
          password: 'Password*',
          login: 'Login',
          forgot: 'Forgot password?',
          noAccount: 'No account?',
          signUp: 'Sign up',
          fillAllFields: 'Please fill all required fields.',
          passwordsMismatch: 'Passwords do not match.',
          leftPanelDescription:
            'Powered by cutting-edge technology, Fulfillment Bridge facilitates ecommerce fulfillment processes. We offer you reliable, efficient, and global fulfillment services.',
          back: 'Back',
          language: 'Language',
          saveContinue: 'Save & Continue',
          registrationCompleted: 'Registration completed!',
          yourInfoSecured: 'Your info is safely secured',

          // SignUp page steps (seller + dropshipper unified keys)
          step1Count: 'STEP 01/03',
          step1Label: 'Personal Info.',
          step2Count: 'STEP 02/03',
          step2Label: 'Business Info.',
          step3Count: 'STEP 03/03',
          step3Label: 'Contact Info.',
          registerSeller: 'Register your seller Account',
          registerDropshipperAccount: 'Register your dropshipper Account',
          completeProfile: 'Complete Your Profile!',
          getStartedSubtitle: 'Get started with global fulfillment and logistics in minutes.',

          // Step 1 - Dropshipper personal info
          fullname: 'Your fullname',
          enterFullname: 'Enter fullname',
          createPassword: 'Create password',
          confirmPassword: 'Confirm password',
          termsAndConditions: 'I agree to terms & conditions',
          registerAccount: 'Register Account',

          // Step 2 - Dropshipper business info
          tellUsMore: 'Tell us more!',
          whereDoYouFulfillOrders: 'Where do you fulfill most of your orders?*',
          domestic: 'Domestically (within one country)',
          international: 'Internationally (cross-border)',
          primaryPaymentModel: 'What is your primary payment model?*',
          prepaidOnly: 'Prepaid only',
          cashOnDelivery: 'Cash on Delivery (COD)',
          hybrid: 'Hybrid (Both prepaid & COD)',
          howDoYouHandleFulfillment: 'How do you handle fulfillment?*',
          fulfillmentBridgeHandlesEverything: 'FulfillmentBridge handles everything',
          mixTeamAndFB: 'I use a mix of my team and FulfillmentBridge',
          shippingSupportOnly: 'I only need shipping support',
          pleaseSelect: 'Please select',

          // Step 3 - Dropshipper contact info
          companyNameRequired: 'Company name*',
          enterCompanyName: 'Enter Company name',
          phoneNumberRequired: 'Phone number*',
          pleaseCompleteFields: 'Please complete all fields before continuing.',

          backBtn: '← Back',

          // SignUp page specific
          "Already have an account?": "Already have an account?",
          "Sign In": "Sign In",
          "Join Us": "Join Us",
          "Seller": "Seller",
          "SellerDesc": "Sell your products worldwide with ease and reliability.",
          "DropShipper": "DropShipper",
          "DropShipperDesc": "Manage your dropshipping business with seamless fulfillment.",
          "Advertiser": "Advertiser",
          "AdvertiserDesc": "Promote products and grow your audience effectively."
        },
      },
      fr: {
        translation: {
          // Global / SignIn & SignUp
          welcome: 'Bienvenue',
          subtitle: 'Connectez-vous pour gérer votre logistique !',
          email: 'Adresse e-mail*',
          password: 'Mot de passe*',
          login: 'Connexion',
          forgot: 'Mot de passe oublié ?',
          noAccount: 'Pas de compte ?',
          signUp: 'S’inscrire',
          fillAllFields: 'Veuillez remplir tous les champs obligatoires.',
          passwordsMismatch: 'Les mots de passe ne correspondent pas.',
          leftPanelDescription:
            'Propulsé par une technologie de pointe, Fulfillment Bridge facilite les processus de logistique e-commerce.',
          back: 'Retour',
          language: 'Langue',
          saveContinue: 'Enregistrer et continuer',
          registrationCompleted: 'Inscription terminée !',
          yourInfoSecured: 'Vos informations sont sécurisées',

          // SignUp page steps
          step1Count: 'ÉTAPE 01/03',
          step1Label: 'Infos personnelles',
          step2Count: 'ÉTAPE 02/03',
          step2Label: 'Infos business',
          step3Count: 'ÉTAPE 03/03',
          step3Label: 'Infos contact',
          registerSeller: 'Créer un compte vendeur',
          registerDropshipperAccount: 'Créer un compte dropshipper',
          completeProfile: 'Complétez votre profil !',
          getStartedSubtitle: 'Commencez avec la logistique mondiale en quelques minutes.',

          // Step 1 - Dropshipper personal info
          fullname: 'Votre nom complet',
          enterFullname: 'Entrez votre nom complet',
          createPassword: 'Créer un mot de passe',
          confirmPassword: 'Confirmer le mot de passe',
          termsAndConditions: "J'accepte les termes et conditions",
          registerAccount: 'Créer un compte',

          // Step 2 - Dropshipper business info
          tellUsMore: 'Dites-nous en plus !',
          whereDoYouFulfillOrders: 'Où traitez-vous la plupart de vos commandes ?*',
          domestic: 'Localement (dans un seul pays)',
          international: 'Internationalement (transfrontalier)',
          primaryPaymentModel: 'Quel est votre modèle de paiement principal ?*',
          prepaidOnly: 'Prépayé uniquement',
          cashOnDelivery: 'Paiement à la livraison (COD)',
          hybrid: 'Hybride (prépayé & COD)',
          howDoYouHandleFulfillment: 'Comment gérez-vous l’exécution ?*',
          fulfillmentBridgeHandlesEverything: 'FulfillmentBridge gère tout',
          mixTeamAndFB: 'J’utilise une combinaison de mon équipe et FulfillmentBridge',
          shippingSupportOnly: "J'ai seulement besoin du support expédition",
          pleaseSelect: 'Veuillez sélectionner',

          // Step 3 - Dropshipper contact info
          companyNameRequired: 'Nom de la société*',
          enterCompanyName: 'Entrez le nom de la société',
          phoneNumberRequired: 'Numéro de téléphone*',
          pleaseCompleteFields: 'Veuillez remplir tous les champs avant de continuer.',

          backBtn: '← Retour',

          // SignUp page specific
          "Already have an account?": "Vous avez déjà un compte ?",
          "Sign In": "Se connecter",
          "Join Us": "Rejoignez-nous",
          "Seller": "Vendeur",
          "SellerDesc": "Vendez vos produits dans le monde entier avec simplicité et fiabilité.",
          "DropShipper": "Dropshipper",
          "DropShipperDesc": "Gérez votre activité de dropshipping avec un service logistique fluide.",
          "Advertiser": "Annonceur",
          "AdvertiserDesc": "Promouvez des produits et développez efficacement votre audience."
        },
      },
      ar: {
        translation: {
          // Global / SignIn & SignUp
          welcome: 'مرحبًا بعودتك',
          subtitle: 'سجّل الدخول لإدارة خدمات الشحن الخاصة بك!',
          email: 'البريد الإلكتروني*',
          password: 'كلمة المرور*',
          login: 'تسجيل الدخول',
          forgot: 'هل نسيت كلمة المرور؟',
          noAccount: 'ليس لديك حساب؟',
          signUp: 'إنشاء حساب',
          fillAllFields: 'يرجى ملء جميع الحقول المطلوبة.',
          passwordsMismatch: 'كلمتا المرور غير متطابقتين.',
          leftPanelDescription:
            'مدعوم بتكنولوجيا متقدمة، يوفر Fulfillment Bridge حلولًا موثوقة وفعالة للخدمات اللوجستية الإلكترونية.',
          back: 'عودة',
          language: 'اللغة',
          saveContinue: 'احفظ وتابع',
          registrationCompleted: 'تم إكمال التسجيل!',
          yourInfoSecured: 'معلوماتك آمنة',

          // SignUp page steps
          step1Count: 'الخطوة 01/03',
          step1Label: 'المعلومات الشخصية',
          step2Count: 'الخطوة 02/03',
          step2Label: 'معلومات العمل',
          step3Count: 'الخطوة 03/03',
          step3Label: 'معلومات الاتصال',
          registerSeller: 'سجل حساب البائع الخاص بك',
          registerDropshipperAccount: 'سجل حساب الدروب شيبر الخاص بك',
          completeProfile: 'أكمل ملفك الشخصي!',
          getStartedSubtitle: 'ابدأ مع الخدمات اللوجستية العالمية خلال دقائق.',

          // Step 1 - Dropshipper personal info
          fullname: 'الاسم الكامل',
          enterFullname: 'أدخل الاسم الكامل',
          createPassword: 'إنشاء كلمة مرور',
          confirmPassword: 'تأكيد كلمة المرور',
          termsAndConditions: 'أوافق على الشروط والأحكام',
          registerAccount: 'تسجيل الحساب',

          // Step 2 - Dropshipper business info
          tellUsMore: 'أخبرنا المزيد!',
          whereDoYouFulfillOrders: 'أين تعالج معظم طلباتك؟*',
          domestic: 'محليًا (داخل دولة واحدة)',
          international: 'دوليًا (عبر الحدود)',
          primaryPaymentModel: 'ما هو نموذج الدفع الأساسي لديك؟*',
          prepaidOnly: 'مدفوع مسبقًا فقط',
          cashOnDelivery: 'الدفع عند الاستلام',
          hybrid: 'مختلط (مدفوع مسبقًا و الدفع عند الاستلام)',
          howDoYouHandleFulfillment: 'كيف تدير تنفيذ الطلبات؟*',
          fulfillmentBridgeHandlesEverything: 'FulfillmentBridge يدير كل شيء',
          mixTeamAndFB: 'أستخدم مزيج من فريقي و FulfillmentBridge',
          shippingSupportOnly: 'أنا أحتاج فقط دعم الشحن',
          pleaseSelect: 'يرجى الاختيار',

          // Step 3 - Dropshipper contact info
          companyNameRequired: 'اسم الشركة*',
          enterCompanyName: 'أدخل اسم الشركة',
          phoneNumberRequired: 'رقم الهاتف*',
          pleaseCompleteFields: 'يرجى إكمال جميع الحقول قبل المتابعة.',

          backBtn: '← عودة',

          // SignUp page specific
          "Already have an account?": "هل لديك حساب بالفعل؟",
          "Sign In": "تسجيل الدخول",
          "Join Us": "انضم إلينا",
          "Seller": "بائع",
          "SellerDesc": "قم ببيع منتجاتك في جميع أنحاء العالم بسهولة وموثوقية.",
          "DropShipper": "دروب شيبر",
          "DropShipperDesc": "قم بإدارة عملك في الدروب شيبنج مع تنفيذ سلس.",
          "Advertiser": "معلن",
          "AdvertiserDesc": "روّج للمنتجات ووسّع جمهورك بفعالية."
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
