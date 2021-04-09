<template>
<div> 
  <navbar-component class="z-50"></navbar-component>
  <div :class="isCard ? '' : 'lg:h-screen'" class="container mx-auto p-6 grid grid-cols-1 row-gap-12 lg:grid-cols-10 lg:col-gap-10 lg:pt-12">
    <Payment @handle-alert="handleAlert" @handle-card="handleCard" :total="total" :items="items"></Payment>
    <Summary :items="items"></Summary>
    <Alert :visible="alertVisible" position="top-right" color="success" title="Success" description="Your payment has been successfully processed." />
  </div>
</div>
</template>

<script>
import NavbarComponent from "../components/Navbar.vue";
import Summary from "../components/Summary.vue";
import Payment from "../components/Payment";
import Alert from "../components/Alert";

export default {
  name: "CheckoutPage",
  components: {
    Payment,
    Summary,
    Alert,
    NavbarComponent
  },
  data() {
    return {
      items: this.$auth.$state.cart,
      alertVisible: false,
      total: 0,
      isCard: false
    };
  },
  beforeCreate() {
    if (!this.$auth.$state.user) this.$router.push('/login')
  },
  mounted() {
    this.getTotal(this.items);
  },
  methods: {
    getTotal(items) {
      items.forEach(item => {
        this.total += item.price * item.quantity;
      });
    },
    handleAlert() {
      this.alertVisible = true;
      setTimeout(() => {
        this.alertVisible = false;
        this.$router.push('/')
      }, 4000);
    },
    handleCard() {
      this.isCard = true;
    }
  }
};
</script>