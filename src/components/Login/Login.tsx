import React from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  Container,
  TextField,
  Paper,
  Snackbar,
  Alert,
  AlertTitle,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useStyles from "../../Material-UI/MaterialUI_css";
import { styled } from "@mui/material/styles";
import Register from "./Register";
import svg from "../../Assets/svg.png";
import { keyframes } from "@mui/system";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
}));

const Login = () => {
  const classes = useStyles();
  // Used for hook form
  const { handleSubmit, control } = useForm();
  // navigate hook
  const navigate = useNavigate();

  // react hook form submit function
  const onSubmit = (data: any) => {
    axios
      .post("http://localhost:3030/user/login", data)
      .then((res) => {
        console.log(res);
        alert("Login Successful");
        localStorage.setItem(
          "userData",
          JSON.stringify(res.data.data.userData)
        );
        navigate("/dashboard/items");
      })
      .catch((e) => {
        alert(e.response.data.data.message);
      });
  };

  return (
    <div>
      <img style={{ height: 200, width: "100%" }} src={svg} alt="svg" />
      <Grid justifyContent="center" container spacing={2}>
        <Grid item xs={1}>
          <Box
            component="img"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABrVBMVEX////4sEQAAADykgC/FSL/tkb8s0X/t0f+tEb4sUb6lwD3lQDykAC8ACD4lgD8mADGFiPxjAD4rkDxq0LqjQDLkDi9hjTEizbhoD7/u0iRZyjVlzr3qTekYwDfhgCzfzGldS2DXSRTOxcmFwC6cACATQCxawDCdQBGMhPopUCpeC5mSBwwIg2iEh2cXgDUljpvQwCHh4dRCQ6KYiZtTR6hoaFbNwAxHQDPfQB5ViGKDxj1nyReQxoVDwYvIQ0+LBHqkDzc3NwvLy/FxcVDKABRUVFpaWlqQAAfEgA0Bgn0pULOzs58DhadERy0FCBcChDNRyvt7e2Pj48dHR09JQBMLgB+TACzs7P1rVbaajNtDBMiBAZJNBTfdzZsbGz97doqBQf/4r8tLS361Kr2tWrGMCdCBwxGRkb4yJTbbDTdXTH3vX8WAwSMgG/r4NN0XDzizLMAAA6zlHAvOkK4o4sZJzK0q59hKwD/3LXXjyaRVyVkLxerayywNiTihzkxDwqmSCXLgjaASSBPKhMAEgS/ay+Qaj1YIxOCKxurRyZBFQ6TTADnsHTIj0qugEfjq/v9AAAgAElEQVR4nO1d+V8bx5JHI+ZAgw7rQgdI3EKAhTHYSAYZMNjI2GCwjYnP+DkBJ473Pt6xebxjs+fb3b95+1s9PdNzQBwhTPL5qH7IAWjUNVX1rbO7e3q61KUudalLXepSl7rUpS51qUtd6lKXutSlLnWpS13q0ifS/vrGjcfz997feaKAnrx7f2/+8Y2N9f3LXlgnaP1w/r1yOt2Zv/EL5nN/4/EdmZvm0ubBTaLNpaabzY1fIJfrN2zRjd18NjReT4fDYTMWITLZf6fr40MTN5dsLh8/uOwl/xR6MP9EMFerpMORmGmCKTexn8UijNGhLYvN5ptfCJPrj9/xBW8NlcKRANa8jEbCpclrYxyD5tcve/k/Sht3aalLE/Vw5MeYk9iMhOu1p/TJ94eXzcJZtH+DtLM1UTdjn86exWQsVqpxff2rv75sRk6h/XluT0vmT5Cei2Lxm/wRf/O3l81MAHH+/g7/qLfJIANY24MsfnXZDHnpMZb1D38/jX9NRNpk0BzCx2vjZJHPvrlsnmQ6JP7+8QszDExstSvCOLGWjsUqm8Tqz0aO6whd/umfvzb7w7EallZpT03NEskuAtgZB+i8HP/VZfNGRAZ445tYP1ZJlnQz3haHsQl8uMS55Rr76y++vGz2eh5gIW++HLxCDIYjtMp0ezLER7eEEcfC9KihyzZHCPCfHnxj8ceINK0WpKYm4jSQGRTEsd+Pe4A4Xodd/nr5MsW4Dg//+MvlK846I1twiS40ZYFZLBYuVcYnh2q1iVptaHK8Ug/HYhF3WEDOcDMmfzDCzfq7S2PwBkLJdUmAWFXdJQkzFk9XatcOFD89vVarlOJOdEAmPO6WbqQEMf7lssR4DxbYs30l7F7UgQWI4I7F1M0A5iRi8XmcZEkw3PKqr0mGvXnlN5fA3/479tUbX/b3e9dE5sSWFqlMONyNNgrTA5m5Yi6XK85lBsqFxorzy2cVFujFWzDgWNhL8QopxdefncF19rXv9r+64mWQsQivP1l/Zi3/dmN6LqSrhqHJpBqqqhXLI6vWX12r1E8DYTMN/z85+JkZRBRzr+e7KwErig3Zwmk2simVsRYKJs0w1NDAyG3770+J92J4W7X4ZzVGYMzjni+CGDTjdUt4hSIT3CnMudjMDVuinIwHR0NxvLRn5meMcBBnH/YMBjDI+OMZ0NRvY7pgz1CNVEg3zmRyhT61OR6cWEZgjFtXPlugCje/0bPsN0HmpG2/YPQnxfqzKyTSqn66RHVhkKu/jQU8NxyDYty88pkCHDC43hP2LyRSgrtXbv52kf0zu7zcRwzmxOKV352ETuFRK4K5HH18NJBHs9T8bCwSg1/6GTTNGufPUDNYqNrfJ9aurDy6/pL961HiRA/kUG2w35aXl3N4N8rIYACPZqn1mVh8fIoE43UkPE8rg0xMBsSWCw+CRfbqZ6ofEoneW+xnD6Ovg1kEY1o4qanFUWBwdjngDYLFrYtn8QYx6LNBM0z+b3JZI8GV2X8XBsN9IWNBURr5k2hvb2/iKvthb3Q7QFGdv4fVwp8uJv1iJEWduGi42WDf/sDPYKSOZV1Lk9SETPRwMqSxSCykHfWCEg8V5VZ0L0CI6hT78xSXOTPVBYhxYNkfLiFxqV1sBLdOKOrzgxH4q1Zl2V6yUbCwZo7JRl+L9nJSlOuJqF+GWg5SU8Pi9ahFaPlC0qepFNaPX7lA17/PvuBGz9ceBs0wMHArbAuQURXwooe1rKIM6K8tDhP3lZeJ6LaPQ2OE/XXRwl5HjKMpn67EEPTW+y+OxTuKMt/zjZfBEiBmMhaSGAypAMXq8mA5gEO/EOEq8mGX3g5AU4uDPnNgeN1ML18Ug28U5W7PrzwMki8eKy33udZMTqJghJmWDstaepyI+pUUOJMdlJ6gGZqeesV+OqB6NTXCEO3A/OJiGGTR9pOeHo/9Uzx10O9h0AIPfTnJpKOGLBEyf/Ew4UcaA7wYy0mbvb658nR5IAXdnfaxaG4CUC/EZ+yTn/DoTWQSMXFEmKCmqiqPto0sRDC4zFx5IU9qmthlP9mNrvlEmOPith5h5BpWCDQD1zise40RtYDKlYuIwu8g2vbkSwSitbjFoKbOFRZnRrIhMKlxrAHkFPS9RCJx9aOivIg+z/tECFmllq1nEArLVPCyaEJr0uHOMziPhNBjhCTBoXiSL07NiAh0eFvvo6VWBwcJMhoPXxyzfx8HhjRwFbolQg1B+urvdq5evXX9NBbjEyx8i3TcFOEJezzBGjE4aTM47Lz446OTfAqrU5f1jP3Tf3m+7WeQcKZo4Yw6A91eS0CpE7v3rfflZTHCwHuy47HNO8Qybk8Yq8gMkuE15o4Suw/BYuJ5njmMprqc1FIFKsmsZPJBmQVwZirPgwVjmgUOqW0BvQkmxo+AGw+LFNukO+z4H8MTunWUAowhYYMhiCyb34sCUj4iPHsNBBlIMuGoerWY09TAzIlwJmtwEeIZVf2oVxBzoMqLAKcBr7jVWT0N0FEzLYMMIcRw3vLtDDU/JqLIMFZ0Lp1TazUqw5mmxl2FMYxnnERtDvGgY+QkOc3NYnwJeNrJAPUuwlE3jppPWagdt/2gPsYWKl5/4pGiXI2+znKs8cQChq6rUkUDhqbyx+jMh4b0PYdB0tNepvXNVNKNp3WqrXaOwQ0EM1+6GIxcQ2zhOPoUAHFbrGyHsog8xxoXh3pmZPX2zHDKkHAmJd4C84F6qlfmkAlwB+9rVHU74vgzdEc6V+5/oij7PV/IXwFH2EpLoSQzpwXVxoiriF6O8gVHAy2GUqMWrn6/RpkkcGZRF/UOvJDtqMwie9CtxN6rAJ/RUbC54YMZQrO6mXTEw2TY0O3V7dDCdCDHgCYJMQVUnSUv8DCxpvPwdS5pcViEwvo4ZIEenpMxXCyiKvusY2BDMLPtghlmhEOmbGF6U5k1NGGHL2CHzzV90cEaghUmwakcgyM4lKvRtT7gzJQupMxkOKK7OcSr6t3LDwSYIsu5Sx0S4g0khS4R8qjCZWCIvbL5b6MiiaB6hTbnwhotA37AAuzrONHLXYwhHmTA3kIuO2SvYif6XNdHoMwuU0R/5FpkuyMcUkohqwh5wnRYsi/LrxUNCDHRe4ya0wedl0EdrDFYTF3Un1MYfowo/IThTDM0KB6EiKaqf5CEmHiLV4VgfZZehQsKnkKInYjA/SKMPUWjjySjGarOXbmKOHR47SjRu8OW9Ta6p1lQyVgYtDhkSqpzj2IJZ9QFtqgINPJrDoeJHVQgjzRuo82+kEtNx2GJnRDiE68Vwsi3SEc1Y25hdIphvxqyap4/LN1HnPVx91vLxctqyICzJTgkN/B7KHHSMWdjVsRFtsNHvoXfqwswUpeexpY6Y4mHEKHLFyKYKYUZjhpVgf2FtZBGUSWnxZOkFWIj1GG+LGlrIfPoUYFFcHSLEhCRobIXcsRZTOy+pHzLelSLhTZ9sp6iaDPRgXT/vaK82Zd9IXe2TCxkesrtt/gnVbON1PTK6uqrQlEKQZEf5iwxadNIh3lUxuRMgDSnyYhM+Ukjh3QyQYB7bDOIyH5FT9oLMSMlhnfN8LmFSNMkys260xNirnAsTDBzm8mn+Dy661SzWY5v6K6Wmj6DUMAyRCs6T3AsgqauGly+msY/xVOwVy8ePrzOs7A1O9+CFWc0S4hmpH6NVjZ57sDmjaV4m+Mm70DHtwAzTIRQwEXChdPqE0Lxmn0W1hiI0VaGbyFfeBv9wMLQMolQM3LZco54VDOzTpr5Ox74WE9iYDOlklM0zYrocW2eNzrdd75urJaOcBE+jSFc02YZTDq4EVRjIqkwh5EVquhkyX/YWwM8hpKMd61K3cNXOVivpmV5i3+KAZgrpIUZswgpHAtPLjnLqp8zFWY4c++J/bSJUiR+zRIhLMyJQFDN7g1ikIzPxpoQ77woreGQnm+Q/jJ7rorn735IwTOooVwul/K1VGH3r3Q1XXNmHLaANedzGO/hKv73pvPIcVuEFEVazitBldCUtBppZcAaG080lg1nWDrMjTIHEcLARgf+eB2aeyQ+H5RPQojlhr2Wg8lwZExpnQ9r9jEx09MfTw9JejFOWSHeqB0nuzk0tOpcThMiIE8msIavHstHujujM9niQaP57ShywZ3ot2d0/vWis4hWrRQ3adivcq7i6Q1kvl9dIewS4yPMIAfhDlLQmZCdAryg2IMYzAIsmsOGbidFSio56FkuvHsGogX8ZFD5v3q6MeMxRmjYBqGtSiwm4sdnkfMU+UlJuTM0I+FJu0nfyDGvMAPot6NMltNzDtEyJDre41CvrwjMlBfMMHZWSyY5wM7ZHB4Fy1BTcyPiy1eH0vasmLl0PjW1lFR4WTNeso38YEClSpN6xLzbdSiptTbyCI3v4RAecXetDRDMuwL1EBKraYNcRQbRKNPSF9DSD0Ey1NTMiq2fRV0anIKa1vvbV9NDlLnloJsFbAcCdprTiLVHf0feTdndE8th0VUxf0QFNyum1FhoUNTcalol1eXenmV6C9U9PKY3oPfGzHpaqOfoiuT1hZrWzoGmb1C9+Np5HqbrGM4UhCQd2N47sar1gNgC4gD4yFvcrAAqDd3FIRyjgB/KIol2jra9HR6GvULrlYVcnulNQ03K8XdLeRpvX00V5b0rM0QRz+wfNPSBGUWiZkHTxcoM6hgi9tx10AeOIRWS1VRtkQuxPmOVxbPb3okbLW+r52gWE1aoUGp9UmkR86ztZ4nrGO2S04oS0mqaJ1BTwy3rqxdzeVVaEzO6MnEo4SsSK2Z07r8adUyTxTELC2WfEzRCZTHzJsaNECq61XSSqVV/u7HpDVTyv3I4xMDMuKggGkZm0fr6kZzuSiZW1WSUaqYsx9WE6s4aEtYAXgdky9R8I3CSeq4w8YmfopZjyGpaQljTrr94A18hmWGEgUy434Z9CPK2QFZDyBH97dHc613G4Es7kEMJKqM5HLLXMKZ50NUtPhs9m4Wq3A9gsNTU+yQ7DI+dwxCbHjMMo/7UL2GB5giyNZyyBEkVwx/ws6t723YQgFzX5gi6VjBOZZDFdAI9VwYMd3iKWo8rEcZrT7dpiPsok34pqXzFSn0t7vRQKqXrui3IRpGq9Vp1ivP8J7mXxqy2amON5kMemT89txAoPv7bLIUP0qpq7XvEB/CGEtDAV9QtDjW1uIDX3JrJhnRVCPJVNmkANzIjM42sJgMHNW7UpLPKhhrMoKENrAjr04IGNlF6VkPu9z7UZi3jBvr2EtDEmD5EuBmKeVB609+v6Xq1wAXZItDTDNULHGR5ltj0UUQAARw6lt0s5E6ZvtVWPYaYBtS0lwbPA2ikhpPJECXej29REZkps9cfXacC/fWjNd3QMpaPXJwLWhsAaIBzBTycMvw4w/SiIXxf6NTpYnieVEhGhzFlM9Ie1LxX3rnKiMDlGLwhMbiSoXrRLoKt+9FvdbbAaoFv531aTvrtJ0OFJPwnQvOyT4RGKDvKxbeQM06fJ6aMOiMbYuRAacXa4xCjCT1pp7g1jroPamxI04ZdNT8rxjZClhEFYATTLgtrgDMhN84w51doCfG5P6mpfdVqyvkZXtWw3GvDnHuprW6pF0ptoNEYxJTzTvEdMfZO9IT7djVnLXUm4wYKVFPJQ6AOvuByFZpRXBSxg1c71eIie15zJuMEFQxqDBlqhtoF03VPKRg9Ufh7w1d7Z/HZfdu5a7a6LU2nZHGk0EwM8V5G1fm5ZvSVuXuZKqd8yq3a4zX/8q3lfLQmy7wlqEHcVmkrbnuA/F5KnWIs/433DxISVqXSO+9F74oEmAtyoWnJxGloo5OW1UjHV1TnT6tWptIoBoALek7K1J9fANCuW8M41P2Qgm8kUENtJVCH3qi0pWzG+5OQxYrTzxZdPnf9gRlP+RW3q4GQaGijHqMTFg6IUEcA8Oq0X3whq8o/kLQGqm5xFvEATY5qShSItMEhuUN51BKJRX+fq8YmCGV9TzHR0IsjwkXy1ePl5zRmRmMGfwspq/CyOKcGgydqrXPWBAvaAJQfA4pdcVuaML4NDh8j/ZU45A/qw3vN6icuDhM0/OuTgJoqr0ouEqHMSB4TJQZSE6vwMmYHtJi4cU/dVFFV5+U83lZGJQ7uYk5zc7gV6W+DQ6/DJ2X4KRxi0focR8nVMlNJjaGizmKWlGZoFhrNZERSoqnZxdnm7GLW2SeFLDIrplNtS6C5Y9khMpd/ELnSLodfewx6uS9onkBoKTaoefBCY5E5jwMWcpBfA0BsoUtT2kZj5EQtZvXfRMTOZ6hP7Cmkh4kj3eLbFXs/VZ62FdTccyqJ9JyK5fAJaVxTL2L0wsAOrZUB3VOLYLkex5MVCvaU6UXLt0uhi0G1mtVjatVd3eO1Ze7cuQyp7EOD/vjptMwhA/mltjLEe0rTxeG4leAHeAtqyr/u425N+fNz7yg3QhbFTQs513tAJWcx9YFFgeiq7fZaJTcW/FpFZ6vxr/HC1bDhDtvG2uLwLgYUtl0cViikyYqumuTxjxO9eQhq8V8VvOsTH/QbhmV53Co9yoy8dsQaJX4Bleeux/kx+v7HCepqcDPxBKYd5ZDqXdNy1KbQcAxzd7OpJIYLPgaVPTU9L+TY8OoxhHVbD1mB7lunGQnRruQ+JK4+ou/Y/kwc8shb6Cm1Rx8lngNG0H7gsP76bD0dybl6ZwCPaQGaYobGMU9Ot/a2+zrLoRdpxu1CGw3LTmU+2NnTcfR1HhFkSn8eBSRctbvvnFRjYEVx05SsqHbrgkju0Bhib9+sXRPpnB2+OQVLQ9Z+D+WH40fXMVqiXN9j3w5HXGY24w1SIb5hHnoWuESyVqnVARvtVA4xHb+wuDiSMVzpk6tSE9tsE0sD/CE8Pn+1Vafo3fqev110IjLG0UM50SBXwZ3Dq6yWZ/EW0+WVvBCpqKSdqqX0S0N11UQ65w9PiWnEq80VRplkVhtZ8e2U6DRRRtzp3RbbE1LTvO7SoLyd/T7/CrkTsg/+eiyn77gFF9IEEbDcleSHW23GNN64tF8UMcSrNUJ9rjjSsDp8368J9bTqLkvDlDkgBx7Ws8h/KY200kIWuBlqsLcIJPR5OhOXekttYXqQtzfk+u7iyOgKyySoo8byp1WLAyvZNyj1NdiPrEhbpPa3h1O06aLq8/iB37KAcognt2ir2LaBDPg3Un44xgy6/4xKvGUytAq7ZbtQFVoMDFzUqXJaFj9Sq1bQ2qCJMStq29k7g0Gq2qkdyQ99BeGblOOfJUTBZ58Vv0yVpaogVpbRCJGmnGaVERrgf2v3Ip3IO5gwOO3K8dsuCXvrNKhppX+cQ6eE4alLMM5mwRn6TnI92NWiX11018qDvgCNuY7UaXrcTXxe0zKXz+bQCGW5Ixgb9tQToZ3TVGsb8Nb0Abk8d5rKamccS8Ap5emvoQZYaq9xgS0IUuuJa8NZHKKsZFU9B5K+ukRLdGPUpr8v45TM/QVFz5d4kyfUANtsPnkCU2DWM8ldeMnpqYzk/GUlw+nG0NYYX28NLSeu3b6isPtBXmeBsLTNqr6vb9FUnp4Gpk5J33J+voWNOtaXkro08jMM4WDOKuwDsPpck7RN5vDbcYf+ciKGAsKBUOPo2Ipdd/GsHt0Y3erG6E6XxsekVdc5vTljtFiiJfeeztHmXve4C/QiK35DhPisHqkncZff/IjUjaEujXeESDxNFyViNNgCBFn1AA21U/rbO2Rp3wumdQoe3ByqtviWAjpONiGV7bMVEwW3nFuIGomeWDK07JQQpLewRYmWK+6mdkq7w3vvlDsuqIkpqHq7lmW3uGcyZ6ADhaQjjofw/C+czDTGZpsrwymwZIiI1t/EghlWZTOM3zzHsPc8Yu/v3IYo+XzVmTc583SdEB9ElIUGkYYcNZU32BbW4PFRhGwKQcqTKBqyENcsRhN92/YYBNS4I9NJJwmG+MZOVU/v/2bQsnAGhLwjRBS3LT16RB3lt0f8EBtVzb6yX6Ao++NJBTnB52lruweB8Q6ie3DvJs1Eqao99zUz5yuPqtVcyrWLkgY1rQEhQ0/laBZ2VQzUoHeqTJ/YOxBeRj9YyYdu780XFokMrSgrKSKtSvvDiU9giG7nCn9hw12AehpGmfv9mawuJAtX0bSUUqUSxlRmlNJY+kkDRTqR4PfeRx/NqWGkbAVeQPVKa3nmFOLnGKfp8RsiXthQfFxUlZh6euFcH3DmFVsiSUBGV1C5/Yot+y2agbb0rhVKOuXXtyhiOPv2Dd1W1ldlzPgtuIa+0so5zJBSRPd8KcuC7TPxZ+ZUDRu7dMkIect29MULOmBAeciHovrYR3IhsIPpL2Xkz9ZhAlXNmmOfkzes8Y6yvPHURlam2kAsWUlpiukcO4Mo+BapmBkJj4uBRJbZMsaM1PBoc8xpF+lgcGH7iMqMKOI+jGKjaBmdDuxHQIlltm87SgcqkVzJg6/kQ56OsqfgypTVtgulnJLOrYvQmMI5dlzcdUZozXh9QnzJ0nQSds/HahjNvt7GAK2BImPGECvdUagWrqHPOUBz3gZtMNzj47XcNmmKy92s27FHb2m2TCUdccIARblWj9uD0C1lyTzPdgQxBm3G00NPxRfcrAzyUgVVHl4RxNMQNMaZM07PBmy8TfSG5uxBRIYTq7pu9eMUKnsiVSjq38oc0uhtb56bdWNqtMBTFUMVMSu2C5RIkFDS820p2Sc1jZmVLcWhIb4Lnxf3Q0dUPMJeEN7jlVs2tIPidcPBmSZzi3mqqHHoUAepZ833lUocPkr0kpaOWibBj7ITs8T8PY+HIyaU9Jzbgu4xNd3/d9v6WrU0dsTRzjXawUK7EcDJrejz/Iqlg+617v5A2yhJ6gwV+bEEzBAfvaT59uEgDpkMdctRzsIAX9BRdir7eG7a2dsyUWcBzZLZPpKCGJo62542J80YzoTlmT7fURK11nSdvXVIyL1R+SNT04fCL/DsdSR/Ek3QBo0XNN9e9jXNRT8bf72aW4vCZjH1D78yoxtmxdmkNHZOJAVJasH3IKbp0PWktSvIatC+xRFXawinXe1vTEL3frT2xoAQj84Uf79zH90cvkd2m/0kL3/KOnJCo00MofwR2TMmxiHCInMV9t5DonNvdrYuPFCelax9KhBize7nWxzeR8/wT74jEVC/voW9MWLrmrPxQNl9rq7QkRhQPVm3d4FP1CoUhxgwVThORJNZiJC8Pd8/yt/7ufYEgXCqifKEbz20owhsVceeOnGKAt/YlXMdq2BBzcf7KMrYabORs0r51aQOZBrTcAjRquZ8DAp8C7OOEDg/iIJzuD0rz9FEwkMU+J8jJhV0lw6hkzcY12g3VR8NG9JJJDA1Zjn5pjJlhI5kDqn55trWpRnF4eFpq1TVoo3eTJSj2omIS7HDyNrqjlPcdGHmR3xbipStItU5L86AHngTDDqvod4/iFBltrrNwhcOBdsov+RcBwbw0GXRvV0GAynWFils9NYHU7dxTOJryi12XmKrO99hZPBzwigY34k+/wE1SPmYGuyaHzI7cEj0He/BJnCzT81wyEAE3vjjQ4SgtxIscR1wRphshVO827VlXq2N3inyCv/x4gUdcvpxV0Rs+PVU4dFHSPXDIhmt63yTZoeONzn0CRGbnQE2fXbr+j9pwATNJWnwFMqrwMgGT2vnAGsa+rIWssv67P/tvfx8cA/0h701slbX2R8QYa0TIqRDsDyn09CZA+ZgyChTMX6lmKdFUZRTVo+iMoMyzviEiEA2NTgYUqsFetKsu1pnVBGntQohOgemqF2MCIOEGGM2/jQcpq5KsZiyF6UiUl2ZwwB471Wo6CNFOkEoiMbEG1BZ6o/dzd4R4VAup6ok7ILnzIgaQtIOHdXus0TaqDLBj29xdYqcIX5C0Z3rpIWn8kdYMyaOTAzuOdEm/WHS0Ys7ZGgDM+3uY6LSTft4E/eScyIhZzB5gl2m4gShYAKYuE4hCnwPiBM8x33xwKNjB0W9R33/O98lDyXTDyGaPjcySxZV1PMj2Me2fFbbGOH76FlSxiOxk6rsOSeqhODx/L5QEAts7njO9YzXPEdhOQsydF3TyaIU1AzPFBDBZe4sS+UpRkP3nPV1EwcLdvCMzzcIbL5y6SnKw5tnthORG7hwRsMuQ28pdQxHM5z1GAQSU4abQTQrDs4dkcqE4zH2PWeX4jSsrcgZa9ObhDN2SKoXpwuF6Tn3aRB0RGZq2btbX3rKCJ2C5TnEVOncMVgWHfrPpCO0eRY/29mJQy2ZX5kWtaThpC59pnq2KlNxK2e4+cPhHBMdPI+O6C4qNu5DkunQton4aTaESdtVcVKZUZUOZVF+f+Kc0wqsaemnwZEOTZ8z3KcmImzs6JmCRFxPPads1s9gkQ6LmFad4/SYz/6v3d0d2r0v5pxDYk/FYLAQiUH/cckKqjMdP/L6EFvXPXpKLF6LBLKInqjSZx2eC7yf6eMnTPQi0JGmnoA1o3rgfACpaNbLIHC04zoKuofgzY2n1rUTAZ4/RK6iYS1cpQl9+1jvF5Tv2VP6ZGnLAc+gl+RjEEc2LrW9e/tMUtBs+zpAipv+w665qxA4gwFpzalR4eBVqaoNrBlRfULUtJkgFeWxxsWcPP8gwBT5nQwt74HljMMxtDLD9nhJ1h6Q5dU057AXfnhwn9dhaNVVekdeGwSCT17IYdc9NK34jpmih0V+WVHEdeg8dxXT4vzjUebR5JNXE2i+2NPuhDXDHqyhW0BaOd+x8+YBLP/C7im7F3TsfNhEQfyZ6+IA3mQSOKPOKlO6XMCho2X5uSfEIvZQ6vI5jBo1sQKuDkCRe7P/gg6dB90JujqADi5WlurywfjwDg1hWwwt3aViqqNGT+xoB+wMSHcj8MP8Rgzf9Q8XfHFAj7j+wXeRVaSOeKW2bNhDDGj4zYk16z4ZHosjLTkBaxyHodEhPkrWZ4L8APG6eYEM8vLpoe+GC1po4acAAARdSURBVGaM0NSndYEWKDrc1sWEGDL0lFz05fVVZ0wWf2A7DDUHAY5W/bct0e0W4+YF3931gFj039ZFr1e5xsVIrsLBDmxUmJZ6E7xMvyeNkACXGnTPjBqiNvKwX4D8hPShyIVfTrZBLHrvBGTfT2KEqnLosO+N4SJtpjRHS1/aBywJITb5BwyN4vPRXMB1SMRgLfIZriY7PIXFcKSCxtfHoUHM4yuLg44PBzKOaqKzCCR95L5Rh7CGCZ1O3GmWl83TGLwoR/iJLFp3Wn2swZAyy7KDW0WjjDah0YUAH+3D9SSsGStTJ6IQxF84Ahuc+FyXyx0SogbdnBdLi56QgzNkaKjcKzN/3NnhlzrsfnAzGMqL4vLIcuANgWTmn0VFOcEW5/2ISktJkxyV2dqyXNvVUtLZWf/tuQXCUEPW6OyzUvANiORxaxcPMg4BUe/6XT9fTcliZGW6Ks3cqRiDAr3KytsPNcNIlQX3lVOuSjbREZ38vPet8ks6fxNwSSe/mtka6ltdGEiJ6pOmpzLlcsYZE0NhKpQpWAVWfGIrUII88q105ujuT6d9FsAFXbQapgxcqYQnRbd9tjHM2FJVwzBU+qdG/wV+G2IGbHMoTZIvBekE0qVm6fNftUqX5c77IZUu1G6aGMGZlNrtt2caC4XpcnYgW54eXmjMSGWbrcl03AzHIaiAi0hRmL2k63LpGr1/2P/Om03BKU7wszcj8frQ2RcCb9XqET4gYFJQ5EuW0gf0uEu68ph6/IdfutwX3VXkaJvJuExXhia2ljysjd18NlRJxyPSFd348ZD7QuA4XS48fgkaKgiaenf/C0mMdKXzgRsTTTMWicXMUr1eIaqX+K3cnhuqodNj8s9iadjyv5Y+4x2yfoLzV278yhTWyK/lngy+9NYUFPxb+qhzMbfJg/m/XGC6+0m0fxfW+EBYIwlCCeTgRykOh3Eg1DReB/T8oX6pAuREYrz3t9vEI2H+s+DA5MeI7h63rmWPpOlV/eXyLo53Ec1NzX+z3N9PN6E7d8f/RKLXA68f4eHtr7++JAj10zpU9e/m/ydGd9wv+S9I/zSKU5BQivPQ9v7//mz4A23cAY9/9e9YWsAV8J9G/OL5ayS/l//3MzBANx3eEa4uKPT6RBLRwce//1nJT9DGex6flSLt2aEZSfMDw8f+8WfJH+jBPVrhwdBPZ5KxZ8Xq7//5stk4k/Yf85Hig1rJ/GQuTRbvDFmpyPz6ZbPw47TBBaksXZsshSOnBDA2c+w9pMcnrH0Adw8ve/GfSPuHFpPK0s1aJR2mGNT0cIZYNcyCcjsmv3u4f9kL/0m0Mf9OYGvzYGtiaLxeSqct9tLpUn18srZ1YCdWT+Y3flnscdrfmLc9iM1t05cuvpv/hQnPQ+uHj+8+8TIlJHd3/nD9F82dQ/vrG4c3Hs+/eXOP0Zv5x49vbKz/AkCzS13qUpe61KUudalLXepSl7rUpS51qUtd6lKXutSlnxf9P8AhCF7U2hP5AAAAAElFTkSuQmCC"
            sx={{
              width: 80,
              height: 80,
              borderRadius: 10,
              animation: `${spin} 1s infinite ease`,
            }}
          />
        </Grid>
        <Grid item xs={5}>
          <Typography textAlign="center" variant="h2">
            WELCOME TO PIZZERIA
          </Typography>
        </Grid>
      </Grid>

      <br />
      <br />
      <Box>
        <Grid justifyContent="space-around" container spacing={2}>
          <Grid item xs={5}>
            <Item>
              {/* <Paper elevation={0} square={true}> */}
              <Typography sx={{ padding: 2 }} variant="h4" textAlign="center">
                Login
              </Typography>

              <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      autoComplete="off"
                      id="email"
                      fullWidth={true}
                      label="Email"
                      type="text"
                      className={classes.formBox}
                      required={true}
                      variant="outlined"
                      {...field}
                    />
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      autoComplete="off"
                      id="password"
                      fullWidth={true}
                      label="Password"
                      type="password"
                      className={classes.formBox}
                      required={true}
                      variant="outlined"
                      {...field}
                    />
                  )}
                />
                <Box my={2}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ width: "100%" }}
                  >
                    Login
                  </Button>
                </Box>
              </form>
              {/* </Paper> */}
            </Item>
          </Grid>
          <strong>(OR)</strong>
          <Grid item xs={5}>
            <Item>
              <Register />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Login;
