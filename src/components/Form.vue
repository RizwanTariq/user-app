<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <Form @submit="onSubmit">
          <legend>Form</legend>
          <fieldset>
            <div class="form-group">
              <label for="fullname" class="form-label mt-2">Name</label>
              <Field
                type="text"
                name="fullName"
                class="form-control"
                id="fullname"
                :rules="fullNameRules"
              />
            </div>
            <ErrorMessage as="span" class="text-danger" name="fullName" />
            <div class="form-group">
              <label for="exampleInputEmail1" class="form-label mt-2"
                >Email address</label
              >
              <Field
                type="email"
                name="email"
                class="form-control"
                id="exampleInputEmail1"
                :rules="emailRules"
              />
              <ErrorMessage as="span" class="text-danger" name="email" />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1" class="form-label mt-2"
                >Password</label
              >
              <Field
                type="password"
                name="password"
                class="form-control"
                id="exampleInputPassword1"
                :rules="passwordRules"
              />
              <ErrorMessage as="span" class="text-danger" name="password" />
            </div>
            <div class="form-group">
              <label for="exampleSelect1" class="form-label mt-2">Gender</label>
              <Field
                as="select"
                name="gender"
                class="form-select"
                id="exampleSelect1"
                :rules="genderRules"
              >
                <option value="" disabled selected>
                  Choose your gender...
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Field>
              <ErrorMessage as="span" class="text-danger" name="gender" />
            </div>
            <fieldset class="form-group mt-2">
              <div class="form-check">
                <Field
                  v-slot="{ field }"
                  name="terms"
                  type="checkbox"
                  :value="true"
                  :rules="termsRules"
                >
                  <small class="form-check-label" for="flexCheckDefault">
                    <input
                      class="form-check-input"
                      id="flexCheckDefault"
                      type="checkbox"
                      name="terms"
                      v-bind="field"
                      :value="true"
                    />
                    By checking, you agree to our Terms, Data and Cookie Policy.
                  </small>
                </Field>
              </div>
              <ErrorMessage as="span" class="text-danger" name="terms" />
            </fieldset>
            <button type="submit" class="btn btn-primary mt-2">Submit</button>
          </fieldset>
        </Form>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

export default {
  name: 'SignUpForm',
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  props: {
    handleSubmit: Function,
  },
  data() {
    return {
      fullNameRules: yup
        .string()
        .max(50, "Name can't be more than 50 characters")
        .required('Name is Required'),
      emailRules: yup
        .string()
        .email('Must be a valid email')
        .max(50)
        .required('Email is Required'),
      passwordRules: yup
        .string()
        .min(8, 'Password must be of minimum 8 characters')
        .max(50, "Password can't be more than 50 characters")
        .required('Password is Required'),
      genderRules: yup.string().required('Gender is Required'),
      termsRules: yup.boolean().required('Terms must be accepted to submit'),
    }
  },
  methods: {
    onSubmit(values) {
      const user = { ...values, ...{ id: Date.now().toString() } }
      this.handleSubmit(user)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#success_message {
  display: none;
}
</style>
